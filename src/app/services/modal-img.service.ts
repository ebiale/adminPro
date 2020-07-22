import {EventEmitter, Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImgService {

  private _showDialog = false;
  public type: 'users'|'doctors'|'hospitals';
  public id: string;
  public img?: string;
  public imageUdated: EventEmitter<boolean> = new EventEmitter<boolean>();

  get showDialog() { return this._showDialog; }
  constructor() { }

  openDialog(type: 'users'|'doctors'|'hospitals', id: string, img: string = 'no-img') {
    this._showDialog = true;
    this.type = type;
    this.id = id;
    this.img = img;

    if (img.includes('https')) {
     this.img = img;
    } else {
      this.img = `${base_url}/upload/${type}/${img}`;
    }
  }

  closeDialog() {
    this._showDialog = false;
  }
}
