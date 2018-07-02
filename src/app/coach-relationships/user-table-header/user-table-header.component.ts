import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Config } from '../user';

@Component({
  selector: 'app-user-table-header',
  templateUrl: './user-table-header.component.html',
  styleUrls: ['./user-table-header.component.scss']
})
export class UserTableHeaderComponent implements OnInit {
  @Input('config') config: Config;
  @Input('selected') selected: boolean = false;
  @Output() clickSelectAll = new EventEmitter<boolean>();
  @Output() clickHeaderAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onClickSelectAll() {
    this.selected = !this.selected;
    this.clickSelectAll.emit(this.selected);
  }
  onClickAction() {
    this.clickHeaderAction.emit('clicked table header');
  }

}
