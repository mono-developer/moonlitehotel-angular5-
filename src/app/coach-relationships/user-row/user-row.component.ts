import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserRowComponent implements OnInit {
  @Input('user') user: User;
  @Input('isCoach') isCoach: boolean = false;
  @Input('contextMenu') contextMenu: boolean = true;
  @Input('actionBtn') actionBtn: string = '';
  @Input('userBtn') userBtn: string = '';

  @Output() clickUserAction = new EventEmitter<User>();
  @Output() changeChecked = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }

  onClickUserAction() {
    this.clickUserAction.emit(this.user);
  }

  onCheckUser() {
    this.user.checked = !this.user.checked;
    this.changeChecked.emit(this.user);
  }

}
