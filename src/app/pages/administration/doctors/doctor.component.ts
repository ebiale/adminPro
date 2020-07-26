import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import * as _ from 'underscore';
import {ActivatedRoute, Router} from '@angular/router';

import {HospitalService} from '../../../services/hospital.service';
import {Hospital} from '../../../models/hospital.model';
import {DoctorService} from '../../../services/doctor.service';
import {Doctor} from '../../../models/doctor.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: []
})
export class DoctorComponent implements OnInit {

  public doctorForm: FormGroup;
  public hospitals: Hospital[];
  public selectedHospital: Hospital;
  public doctor: Doctor;

  constructor(private fb: FormBuilder,
              private hospitalService: HospitalService,
              private doctorService: DoctorService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.getHospList();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      if (id && id !== 'new') {
        this.getSelectedDoctor(id);
      }
    });

    this.doctorForm = this.fb.group({
      _id: [''],
      name: ['', Validators.required],
      hospital: ['', Validators.required]
    });

    this.doctorForm.get('hospital').valueChanges.subscribe(hospId => {
      this.selectedHospital = this.hospitals.find(h => h._id === hospId);
    });
  }

  saveDoctor() {
    if (!this.doctor) {
      this.doctorService.createDoctor(this.doctorForm.value)
        .subscribe((resp: any) => {
          const name = this.doctorForm.get('name').value;
          Swal.fire('Success', `Doctor ${name} was created`, 'success');
          this.router.navigateByUrl(`/dashboard/doctors/${resp.doctor._id}`);
          this.doctor = resp;
        }, (err => Swal.fire('Cannot create the doctor', err.error.msg, 'error')));
    } else {
      this.doctorService.updateDoctor(this.doctorForm.value)
        .subscribe((resp: any) => {
          const name = this.doctorForm.get('name').value;
          Swal.fire('Success', `Doctor ${name} was updated`, 'success');
          this.close();
        }, (err => Swal.fire('Cannot updated the doctor', err.error.msg, 'error')));
    }
  }

  getHospList() {
    this.hospitalService.getHospitals().subscribe((res: any) => {
      this.hospitals = _.sortBy(res.hospitals, 'name');
    });
  }

  getSelectedDoctor(id: string) {
    this.doctorService.getDoctorById(id).subscribe((doctor: Doctor) => {
      if (!doctor) {
        close();
      }
      this.doctor = doctor;
      const {name, hospital, _id} = doctor;
      this.doctorForm.setValue({name, hospital: hospital ? hospital._id : '', _id});
    });
  }

  close() {
    this.router.navigateByUrl(`/dashboard/doctors`);
  }
}
