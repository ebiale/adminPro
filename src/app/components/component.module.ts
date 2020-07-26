import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';

import {IncComponent} from './inc/inc.component';
import {GraphComponent} from './graph/graph.component';
import {ModalImgComponent} from './modal-img/modal-img.component';


@NgModule({
  declarations: [
    GraphComponent,
    IncComponent,
    ModalImgComponent,
  ],
  exports: [
    GraphComponent,
    IncComponent,
    ModalImgComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentModule {
}
