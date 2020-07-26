import {Component} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent {

  progress = 50;
  progress2 = 20;

  getProgress(progress) {
    return `${progress}%`;
  }
}
