import { Component, OnInit } from '@angular/core';
import { accountService } from '../services/account.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})

export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private accountService: accountService) {}

  ngOnInit(): void {
    this.users = this.accountService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.accountService.onSetToInactive(id);
  }
}
