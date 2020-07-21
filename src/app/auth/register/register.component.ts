import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ '../login/login.component.css' ]
})
export class RegisterComponent {

  public formSubmitted = false;
  public registerForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    terms: [false, [Validators.required]]
  }, {Validators: this.equalPsw('password', 'password2')});

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  createUser() {
    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.createUser(this.registerForm.value).subscribe( () => {
      this.router.navigate(['/dashboard']);
    }, (err) => {
      Swal.fire('Error', err.error.msg, 'error');
    });
  }

  invalidField(field) {
    return this.registerForm.get(field).invalid && this.formSubmitted;
  }

  equalPsw(psw1, psw2) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(psw1);
      const pass2Control = formGroup.get(psw2);

      if (pass1Control.value === pass2Control.value) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({notEqual: true});
      }
    };
  }
}
