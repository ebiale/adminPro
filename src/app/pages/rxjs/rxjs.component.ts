import {Component, OnDestroy} from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnDestroy{

  public intSubsc: Subscription;
  constructor() {

    /*this.getObs().pipe(
      retry()
    ).subscribe(
      val => console.log('Count: ', val),
      err => console.warn('Error', err),
      () => console.log('Obs terminated')
    );*/

    this.intSubsc = this.getInterval().subscribe(console.log);
  }

  getInterval(): Observable<number> {
    return interval(100)
      .pipe(
        map(val => val + 1),
        filter(val => val % 2 === 0)
      );
  }

  getObs(): Observable<number> {
    let count = 0;

    return new Observable<number>(observer => {
      const counterInterval = setInterval(() => {
        count++;
        observer.next(count);

        if (count === 2) {
          observer.error('2 reached');
        }
        if (count === 4) {
          clearInterval(counterInterval);
          observer.complete();
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    this.intSubsc.unsubscribe();
  }
}
