import {Component, OnDestroy, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {delay} from 'rxjs/operators';
import {Subscription} from 'rxjs';

import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {SearchsService} from '../../../services/searchs.service';
import {ModalImgService} from '../../../services/modal-img.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ['']
})
export class UsersComponent implements OnInit, OnDestroy {

  public currentUser;
  public totalCount = 0;
  public users: User[] = [];
  public from = 0;

  public loading = true;

  private subscriptions: Subscription[] = [];

  constructor(private userService: UserService,
              private searchService: SearchsService,
              private modalImgService: ModalImgService) {
    this.currentUser = userService.uid;
  }

  ngOnInit(): void {
    this.getUsers();
    this.subscriptions.push(this.modalImgService.imageUdated
      .pipe(delay(100))
      .subscribe(() => { this.getUsers(); }));
  }

  private getUsers() {
    this.userService.getUsers(this.from, 5)
      .subscribe( ({totalCount, users}: any) => {
        this.users = users;
        this.totalCount = totalCount;
        this.loading = false;
      });
  }

  nextPage(val: number) {
    this.from += val;
    if (this.from < 0) {
      this.from = 0;
    } else if (this.from > this.totalCount) {
      this.from -= val;
    } else {
      this.loading = true;
      this.getUsers();
    }
  }

  search(search: string) {
    this.loading = true;
    if (search.length === 0) {
      return this.getUsers();
    }

    this.searchService.search('users', search).subscribe(
      (res: User[]) => {
        this.users = res;
        this.totalCount = this.users.length;
        this.loading = false;
      }
    );
  }

  deleteUser(user) {
    Swal.fire({
      title: `Delete ${user.name}?`,
      text: 'Are you sure you want to delete this user?',
      icon: 'question',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {
        this.loading = true;
        this.userService.deleteUser(user).subscribe(() => {
          Swal.fire('User deleted', `${user.name} was deleted`, 'success');
          this.from = 0;
          this.getUsers();
        });
      }
    });
  }

  updateRole(user) {
    this.userService.updateUser(user).subscribe(res => {
      console.log(res);
      Swal.fire('Role Updated', `${user.name} was updated`, 'success');
    });
  }

  updateImage(user) {
    this.modalImgService.openDialog('users', user.uid, user.img);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
