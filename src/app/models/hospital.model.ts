import {User} from './user.model';

export class Hospital {
  constructor(public name: string,
              public user?: User,
              public img?: string,
              public _id?: string,
              public edit?: boolean) {
  }
}
