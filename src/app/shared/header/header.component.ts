import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  public user;
  constructor(private userService: UserService) {
    this.user = userService.user;
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }
}
