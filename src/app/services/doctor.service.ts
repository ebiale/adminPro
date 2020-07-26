import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

import {UserService} from './user.service';
import {Doctor} from '../models/doctor.model';
import {map} from 'rxjs/operators';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient, private userService: UserService) { }

  get token(): string { return localStorage.getItem('token') || ''; }
  get headers(): any { return { headers: { 'x-token': this.token }}; }

  getDoctors(from: number = 0, limit: number = 5) {
    const url = `${base_url}/doctors?from=${from}&limit=${limit}`;
    return this.http.get(url, this.headers);
  }

  getDoctorById(id: string) {
    const url = `${base_url}/doctors/${id}`;
    return this.http.get(url, this.headers)
      .pipe(map( (resp: any) => resp.doctor));
  }

  createDoctor(doctor: any) {
    const url = `${base_url}/doctors`;
    return this.http.post(url, doctor, this.headers);
  }

  updateDoctor(doctor: any) {
    const url = `${base_url}/doctors/${doctor._id}`;
    doctor.user = this.userService.uid;
    return this.http.put(url, doctor, this.headers);
  }

  deleteDoctor(id: string) {
    const url = `${base_url}/doctors/${id}`;
    return this.http.delete(url, this.headers);
  }
}
