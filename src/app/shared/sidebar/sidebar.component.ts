import { Component } from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItems: any;
  constructor(private sidebarService: SidebarService,
              private userService: UserService) {
    this.menuItems = sidebarService.menu;
  }

  logout() {
    this.userService.logout();
  }
}
