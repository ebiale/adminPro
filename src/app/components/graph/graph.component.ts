import {Component, Input} from '@angular/core';
import {Color, Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styles: []
})
export class GraphComponent {
  @Input() chartLabels: Label[] = [];
  @Input() chartData: MultiDataSet = [];
  @Input() chartType: ChartType = 'doughnut';
  @Input() chartTitle: string;
  @Input() colors: Color[] = [ {backgroundColor: ['#5b9aa0', '#d6d4e0', '#b8a9c9', '#622569']}];
}
