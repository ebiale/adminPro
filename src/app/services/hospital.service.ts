import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient, private userService: UserService) { }

  get token(): string { return localStorage.getItem('token') || ''; }
  get headers(): any { return { headers: { 'x-token': this.token }}; }

  getHospitals(from: number = 0, limit: number = 5) {
    const url = `${base_url}/hospitals?from=${from}&limit=${limit}`;
    return this.http.get(url, this.headers);
  }

  createHospital(name: string) {
    const url = `${base_url}/hospitals`;
    const user = this.userService.user;
    return this.http.post(url, {name, user}, this.headers);
  }

  updateHospital(name: string, id: string) {
    const url = `${base_url}/hospitals/${id}`;
    const user = this.userService.user;
    return this.http.put(url, {name, user}, this.headers);
  }

  deleteHospital(id: string) {
    const url = `${base_url}/hospitals/${id}`;
    return this.http.delete(url, this.headers);
  }
}
