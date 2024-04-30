import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterActions = new BehaviorSubject<number>(0);
  private activeCounter = new BehaviorSubject<number>(0);
  private inactiveCounter = new BehaviorSubject<number>(0);

  incrementActive() {
    this.activeCounter.next(this.activeCounter.value + 1);
    this.counterActions.next(this.counterActions.value + 1);
  }

  incrementInactive() {
    this.inactiveCounter.next(this.inactiveCounter.value + 1);
    this.counterActions.next(this.counterActions.value + 1);
  }

  getCounter() {
    return this.counterActions.asObservable();
  }
  
  getCounterActive() {
    return this.activeCounter.asObservable();
  }

  getCounterInactive() {
    return this.inactiveCounter.asObservable();
  }
}
