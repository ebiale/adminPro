import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    /*
    const promise = new Promise( (resolve, reject) => {
      false ? resolve('Hola Mundo') : reject('Error');
    });

    promise
      .then( (msg) => { console.log(msg); })
      .catch( (err) => { console.log(err); })
      .finally( () => { console.log('finally'); });

    console.log('fin del init');
    */
    this.getUsers().then( users => { console.log(users); });
  }

  getUsers() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));
    });
  }

}
