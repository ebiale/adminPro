import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {RegisterForm} from '../interfaces/register-form.interface';
import {environment} from '../../environments/environment';
import {LoginForm} from '../interfaces/login-form.interface';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public auth2: any;
  public user: User;
  constructor(private http: HttpClient,
              private router: Router,
              private ngZone: NgZone) {
    this.googleInit();
  }

  get token(): string { return localStorage.getItem('token') || ''; }
  get uid(): string { return this.user.uid; }
  get role(): string { return this.user.role; }
  get headers(): any { return { headers: { 'x-token': this.token }}; }

  googleInit() {
    return new Promise(resolve => {
      gapi.load('auth2', () => {
        // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
          client_id: '191300795345-ofk7pinpj90uc7p2kot1pekl5kiqq05t.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve();
      });
    });
  }

  validateToken(): Observable<boolean> {
    return this.http.get(`${base_url}/login/renew`, this.headers).pipe(
      map((resp: any) => {
        const {email, google, name, role, img, uid} = resp.user;
        this.user = new User(name, email, '', google, img, role, uid);
        this.saveInLocalStorage(resp.token, resp.menu);
        return true;
      }),
      catchError(() => of(false))
    );
  }

  createUser(user: RegisterForm) {
    return this.http.post(`${base_url}/users`, user).pipe(
      map((resp: any) => {
        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', JSON.stringify(resp.user));
        this.saveInLocalStorage(resp.token, resp.menu);
        return true;
      }));
  }

  updateUser(user: User) {
     return this.http.put(`${base_url}/users/${user.uid || this.uid}`, user, this.headers);
  }

  getUsers(from: number = 0, limit: number = 5) {
    const url = `${base_url}/users?from=${from}&limit=${limit}`;
    return this.http.get(url, this.headers)
      .pipe(
        map ( (resp: any) => {
          const users = resp.users.map(
            user => new User(user.name, user.email, '', user.google, user.img, user.role, user.uid)
          );

          return {
            totalCount: resp.totalCount,
            users
          };
        })
      );
  }

  getUserById(uid) {
    const url = `${base_url}/users/${uid}`;
    return this.http.get(url, this.headers)
      .pipe(
        map ( (resp: any) => {
          const user = resp.map(
            u => new User(u.name, u.email, '', u.google, u.img, u.role, u.uid)
          );

          return {
            user
          };
        })
      );
  }

  deleteUser(user: User) {
    return this.http.delete(`${base_url}/users/${user.uid}`, this.headers);  }

  login(user: LoginForm) {
    if (user.remember) {
      localStorage.setItem('email', user.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(`${base_url}/login`, user).pipe(
      map((resp: any) => {
        localStorage.setItem('id', resp.id);
        this.saveInLocalStorage(resp.token, resp.menu);
        localStorage.setItem('user', JSON.stringify(resp.user));

        return true;
      }));
  }

  loginGoogle(token) {
    return this.http.post(`${base_url}/login/google`, {token}).pipe(
      map((resp: any) => {
        this.saveInLocalStorage(resp.token, resp.menu);
        return true;
      }));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('menu');

    this.auth2.signOut().then(() => {
      this.ngZone.run(() => {
        this.router.navigateByUrl('/login');
      });
    });
  }

  private saveInLocalStorage(token: string, menu: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('menu', JSON.stringify(menu));
  }
}
