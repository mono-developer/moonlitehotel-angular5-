import { Component, OnInit, Input } from '@angular/core';
import { User, Config } from '../user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  @Input('config') config: Config;
  @Input('users') users: User[] = [];
  isAllSelected: boolean = false;
  userNumber: number = 0;

  constructor() { }

  ngOnInit() {
    this.userNumber = this.users.length;
  }
  gotoAlphaBet(ev: any) {
    console.log(`${ev} clicked`);
  }
  onChangedPage(pageNum: number) {
    console.log(`${pageNum} page`);
  }

  trackByIndex(index: number) {
    return index;
  }

  onChangeUser(ev: User, i: number) {
    this.onCheckUsers();
  }

  onClickUserAction(ev: User, i: number) {
    console.log('clicked user right button');
  }

  onCheckUsers() {
    let selectedUserNumber = 0;
    this.users.map((user: User) => {
      if (user.checked) {
        selectedUserNumber ++;
      }
    });

    if (this.userNumber !== 0 && this.userNumber === selectedUserNumber) {
      this.isAllSelected = true;
    } else {
      this.isAllSelected = false;
    }
  }

  onClickSelectAll(ev: boolean) {
    this.users = this.users.map((user: User) => {
      user.checked = ev;
      return user;
    });
  }
  onClickHeaderAction(ev: string) {
    console.log(ev);
  }
}
