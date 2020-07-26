import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';

import {Hospital} from '../../../models/hospital.model';
import {Doctor} from '../../../models/doctor.model';
import {SearchsService} from '../../../services/searchs.service';
import {ModalImgService} from '../../../services/modal-img.service';
import {DoctorService} from '../../../services/doctor.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styles: ['']
})
export class DoctorsComponent implements OnInit, OnDestroy {
  public totalCount = 0;
  public doctors: Doctor[] = [];
  public from = 0;

  public loading = true;

  private subscriptions: Subscription[] = [];

  constructor(private searchService: SearchsService,
              private modalImgService: ModalImgService,
              private doctorService: DoctorService) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.modalImgService.imageUdated
      .pipe(delay(100))
      .subscribe(() => { this.getDoctors(); console.log('updated'); }));
    this.getDoctors();
  }

  private getDoctors() {
    this.doctorService.getDoctors(this.from, 5).subscribe((res: any) => {
      this.doctors = res.doctors;
      this.totalCount = res.totalCount;
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
      this.getDoctors();
    }
  }

  search(search: string) {
    this.loading = true;
    if (search.length === 0) {
      return this.getDoctors();
    }

    this.searchService.search('doctors', search).subscribe(
      (res: Hospital[]) => {
        this.doctors = res;
        this.totalCount = this.doctors.length;
        this.loading = false;
      }
    );
  }

  deleteDoctor(doctor) {
    Swal.fire({
      title: `Delete ${doctor.name}?`,
      text: 'Are you sure you want to delete this doctor?',
      icon: 'question',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {
        this.loading = true;
        this.doctorService.deleteDoctor(doctor._id).subscribe(() => {
          Swal.fire('Doctor deleted', `${doctor.name} was deleted`, 'success');
          this.from = 0;
          this.getDoctors();
        });
      }
    });
  }

  createDoctor() {}

  updateDoctor(doctor) {
    this.doctorService.updateDoctor(doctor).subscribe(resp => {
      Swal.fire('Success', `${doctor.name} was updated`, 'success');
      this.getDoctors();
    });
  }

  updateImage(doctor) {
    this.modalImgService.openDialog('doctors', doctor._id, doctor.img);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
