import { Component } from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  public user;

  constructor(public sidebarService: SidebarService,
              private userService: UserService) {
    this.user = userService.user;
  }

  logout() {
    this.userService.logout();
  }
}
