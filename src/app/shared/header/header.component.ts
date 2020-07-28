import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  public user;
  constructor(private userService: UserService, private router: Router) {
    this.user = userService.user;
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }

  search(searchText: string) {
    if (searchText.length === 0) {
      return this.router.navigateByUrl('/dashboard');
    }
    this.router.navigateByUrl(`/dashboard/global-search/${searchText}`);
  }
}
