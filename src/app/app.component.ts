import { Component, OnInit } from '@angular/core';
import { accountService } from './services/account.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [accountService, CounterService]
})
export class AppComponent implements OnInit{
  
  counterActions: number;
  activeCounter: number;
  inactiveCounter: number;

  constructor(private counterService: CounterService) {
  }
  ngOnInit(): void {
    this.counterService.getCounter().subscribe(count => {
      this.counterActions = count;
    });
    this.counterService.getCounterActive().subscribe(activeCount => {
      this.activeCounter = activeCount;
    });
    this.counterService.getCounterInactive().subscribe(inactiveCount => {
      this.inactiveCounter = inactiveCount;
    });
  }
  

}
