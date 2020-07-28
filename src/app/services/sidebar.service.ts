import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [];

  constructor(private router: Router) {}

  loadMenu() {
    this.menu = JSON.parse(localStorage.getItem('menu'));

    if (!this.menu) {
      this.router.navigateByUrl('/login');
    }
  }

  /*= [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: '/'},
        {title: 'Chart', url: 'chart'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Promises', url: 'promises'},
        {title: 'RxJs', url: 'rxjs'},
      ]
    },
    {
      title: 'Administration',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        {title: 'Users', url: 'users'},
        {title: 'Hospitals', url: 'hospitals'},
        {title: 'Doctors', url: 'doctors'}
      ]
    }
    ];
*/

}
