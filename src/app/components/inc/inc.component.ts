import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-inc',
  templateUrl: './inc.component.html',
  styles: []
})
export class IncComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() progress = 50;
  @Input() label = 'Title';
  @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onChanges(newValue: number) {
    newValue = newValue || 0;
    this.valueChanged.emit(newValue > 100 ? 100 : newValue < 0 ? 0 : newValue);
    this.txtProgress.nativeElement.value = Number(newValue);
  }

  changeValue(val: number): void {
    if ((this.progress < 100 && val > 0) || (this.progress > 0 && val < 0)) {
      this.progress += val;
      this.valueChanged.emit(this.progress);
    }
  }
}
