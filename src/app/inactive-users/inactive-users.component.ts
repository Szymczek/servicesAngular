import { Component, OnInit } from '@angular/core';
import { accountService } from '../services/account.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private accountService: accountService) {}

  ngOnInit(): void {
    this.users = this.accountService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.accountService.onSetToActive(id);
  }
}
