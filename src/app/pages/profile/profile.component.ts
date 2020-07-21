import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';
import {FileUploadService} from '../../services/file-upload.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public user: User;
  public image: File;
  public imgTmp: string | ArrayBuffer = null;

  constructor(private fb: FormBuilder, private userService: UserService,
              private fileUploadService: FileUploadService) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
    });
  }

  updateProfile() {
    this.userService.updateUser(this.profileForm.value).subscribe(() => {
      const {name, email} =  this.profileForm.value;
      this.user.name = name;
      this.user.email = email;

      Swal.fire('Profile updated', 'Success', 'success');
    }, (err => Swal.fire('Cannot update the profile', err.error.msg, 'error')));
  }

  changeImage(file: File) {
    this.image = file;

    if (!file) { return this.imgTmp = null; }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      this.imgTmp = reader.result;
    };
  }

  uploadImage() {
    this.fileUploadService.updatePicture(this.image, 'users', this.user.uid)
      .then( img => {
        this.user.img = img;
        Swal.fire('Image updated', 'Success', 'success');
      });
  }
}
