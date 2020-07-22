// import {environment} from '../../environments/environment';

// const base_url = environment.base_url;

export class Doctor {
  constructor(public name: string,
              public uid ?: string) {}

  /*get imgUrl() {
    if (this.img && this.img.includes('https')) {
      return this.img;
    }
    if (this.img){
      return `${base_url}/upload/users/${this.img}`;
    }
    return `${base_url}/upload/users/no-image`;
  }*/
}
