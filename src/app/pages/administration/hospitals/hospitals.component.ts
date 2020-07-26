import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import Swal from 'sweetalert2';

import {Hospital} from '../../../models/hospital.model';
import {SearchsService} from '../../../services/searchs.service';
import {ModalImgService} from '../../../services/modal-img.service';
import {HospitalService} from '../../../services/hospital.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-hospitalss',
  templateUrl: './hospitals.component.html',
  styles: ['']
})
export class HospitalsComponent implements OnInit, OnDestroy {
  public totalCount = 0;
  public hospitals: Hospital[] = [];
  public from = 0;

  public loading = true;

  private subscriptions: Subscription[] = [];
  constructor(private searchService: SearchsService,
              private modalImgService: ModalImgService,
              private hospitalService: HospitalService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.modalImgService.imageUdated
      .pipe(delay(100))
      .subscribe(() => { this.getHospitals(); }));
    this.getHospitals();
  }

  private getHospitals() {
    this.hospitalService.getHospitals(this.from, 5).subscribe((res: any) => {
      this.hospitals = res.hospitals;
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
      this.getHospitals();
    }
  }

  search(search: string) {
    this.loading = true;
    if (search.length === 0) {
      return this.getHospitals();
    }

    this.searchService.search('hospitals', search).subscribe(
      (res: Hospital[]) => {
        this.hospitals = res;
        this.totalCount = this.hospitals.length;
        this.loading = false;
      }
    );
  }

  deleteHospital(hospital) {
    Swal.fire({
      title: `Delete ${hospital.name}?`,
      text: 'Are you sure you want to delete this hospital?',
      icon: 'question',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {
        this.loading = true;
        this.hospitalService.deleteHospital(hospital._id).subscribe(() => {
          Swal.fire('Hospital deleted', `${hospital.name} was deleted`, 'success');
          this.from = 0;
          this.getHospitals();
        });
      }
    });
  }

  updateImage(hospital) {
    this.modalImgService.openDialog('hospitals', hospital._id, hospital.img);
  }

  updateHospital(hospital) {
    this.hospitalService.updateHospital(hospital.name, hospital._id).subscribe(resp => {
      Swal.fire('Success', `${hospital.name} was updated`, 'success');
      this.getHospitals();
    });
  }

  async createHospital() {
    const {value} = await Swal.fire<string>({
      title: 'Create Hospital',
      text: 'Enter the hospital name',
      input: 'text',
      inputPlaceholder: 'Hospital Name',
      showCancelButton: true
    });

    if (value && value.trim().length > 0) {
      this.hospitalService.createHospital(value)
        .subscribe(res => {
          Swal.fire('Success', `${value} was created`, 'success');
          this.getHospitals();
        });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
