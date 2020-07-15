import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component implements OnInit {

  constructor() { }

  graphs: any = {
    graph1: {
      labels: ['Downloads', 'Uploads', 'Sales'],
      data:  [24, 30, 46],
      type: 'doughnut',
      title: 'You can eat bread'
    },
    graph2: {
      labels: ['Men', 'Women'],
      data:  [6500, 6000],
      type: 'doughnut',
      title: 'Interviewed'
    },
    graph3: {
      labels: ['Yes', 'No'],
      data:  [95, 5],
      type: 'doughnut',
      title: 'Problem with beans?'
    },
    graph4: {
      labels: ['No', 'Yes'],
      data:  [85, 15],
      type: 'doughnut',
      title: 'Do you mind?'
    },
  };

  ngOnInit(): void {
  }
}
