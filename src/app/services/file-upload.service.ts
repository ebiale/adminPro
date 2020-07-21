import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

  async updatePicture(
    file: File,
    type: 'users'|'doctors'|'hospitals',
    id: string
  ) {
    try {
      const url = `${base_url}/upload/${type}/${id}`;
      const formData = new FormData();
      formData.append('image', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();
      if (data.ok) {
        return data.fileName;
      }
      console.log('error', data.msg);
      return false;

    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
