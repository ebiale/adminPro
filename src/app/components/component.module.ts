import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IncComponent} from './inc/inc.component';
import {GraphComponent} from './graph/graph.component';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    GraphComponent,
    IncComponent,
  ],
  exports: [
    GraphComponent,
    IncComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentModule {}
