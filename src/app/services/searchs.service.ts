import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {User} from '../models/user.model';
import {Doctor} from '../models/doctor.model';
import {Hospital} from '../models/hospital.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SearchsService {

  constructor(private http: HttpClient) { }

  get token(): string { return localStorage.getItem('token') || ''; }
  get headers(): any { return { headers: { 'x-token': this.token }}; }

  private transformUsers(res: any[]): User[] {
    return res.map(user => new User(user.name, user.email, '', user.google, user.img, user.role, user.uid));
  }

  private transformDoctors(res: any[]): Doctor[] {
    return res.map(doctor => new Doctor(doctor.name, doctor.uid));
  }

  private transformHospitals(res: any[]): Hospital[] {
    return res.map(hospital => new Hospital(hospital.name, hospital.uid));
  }

  search(type: 'users'|'doctors'|'hospitals', search: string = '') {
    const url = `${base_url}/globalSearch/${type}/${search}`;
    return this.http.get(url, this.headers)
      .pipe(
        map( (resp: any) => resp.data),
        map((resp => {
          switch (type) {
            case 'users': return this.transformUsers(resp);
            case 'doctors': return this.transformDoctors(resp);
            case 'hospitals': return this.transformHospitals(resp);
            default: return [];
          }
        }))
      );
  }
}
