import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchsService} from '../../services/searchs.service';
import {User} from '../../models/user.model';
import {Doctor} from '../../models/doctor.model';
import {Hospital} from '../../models/hospital.model';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styles: [
  ]
})
export class GlobalSearchComponent implements OnInit {

  public users: User[] = [];
  public doctors: Doctor[] = [];
  public hospitals: Hospital[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private searchService: SearchsService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({search}) => {
      this.globalSearch(search);
    });
  }

  private globalSearch(search) {
    this.searchService.globalSearch(search).subscribe((resp: any) => {
      const {users, doctors, hospitals} = resp;
      this.users = users;
      this.doctors = doctors;
      this.hospitals = hospitals;
     });
  }

  goToUsers() { this.router.navigateByUrl('/dashboard/users'); }
  goToHospitals() { this.router.navigateByUrl('/dashboard/hospitals'); }
  goToDoctors() { this.router.navigateByUrl('/dashboard/doctors'); }
  goToDoctor(id) { this.router.navigateByUrl(`/dashboard/doctors/${id}`); }
}
