import {Pipe, PipeTransform} from '@angular/core';
import {environment} from '../../environments/environment';

const base_url = environment.base_url;
@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(img: string, type: 'users'|'doctors'|'hospitals'): string {

    if (!img) { return `${base_url}/upload/${type}/no-image`; }
    if (img.includes('https')) { return img; }

    return `${base_url}/upload/${type}/${img}`;
  }
}
