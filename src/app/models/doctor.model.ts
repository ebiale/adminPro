import {Hospital} from './hospital.model';
import {User} from './user.model';

export class Doctor {
  constructor(public name: string,
              public user?: User,
              public hospital?: Hospital,
              public img?: string,
              public _id?: string) {}
}
