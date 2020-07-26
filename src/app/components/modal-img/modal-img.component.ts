import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';

import {ModalImgService} from '../../services/modal-img.service';
import {FileUploadService} from '../../services/file-upload.service';

@Component({
  selector: 'app-modal-img',
  templateUrl: './modal-img.component.html',
  styles: []
})
export class ModalImgComponent implements OnInit {
  public image: File;
  public imgTmp: string | ArrayBuffer = null;

  constructor(public modalImgService: ModalImgService, private fileUploadService: FileUploadService) { }

  ngOnInit(): void {}

  closeDialog() {
    this.imgTmp = null;
    this.image = null;
    this.modalImgService.closeDialog();
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
    const {id, type} = this.modalImgService;
    this.fileUploadService.updatePicture(this.image, type, id)
      .then( () => {
        this.closeDialog();
        Swal.fire('Image updated', 'Success', 'success');
        this.modalImgService.imageUdated.emit(true);
      }).catch(err => {
      console.log(err);
      Swal.fire('Error', 'Image cannot be uploaded', 'error');
    });
  }

}
