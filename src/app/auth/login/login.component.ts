import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

import {UserService} from '../../services/user.service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;
  public formSubmitted = false;
  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    remember: [localStorage.getItem('email')]
  });

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private ngZone: NgZone) {
  }

  login() {
    this.formSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.userService.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl('/dashboard');
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
  }

  invalidField(field) {
    return this.loginForm.get(field).invalid && this.formSubmitted;
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 240,
      height: 50,
      longtitle: true,
      theme: 'dark'
    });

    this.startApp();
  }

  async startApp() {
    await this.userService.googleInit();
    this.auth2 = this.userService.auth2;
    this.attachSignin(document.getElementById('my-signin2'));

  }

  attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        const id_token = googleUser.getAuthResponse().id_token;
        this.userService.loginGoogle(id_token).subscribe(() => {
          this.ngZone.run(() => this.router.navigate(['/dashboard']));

        }, (err) => {
          Swal.fire('Error', err.error.msg, 'error');
        });
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngOnInit(): void {
    this.renderButton();
  }
}
