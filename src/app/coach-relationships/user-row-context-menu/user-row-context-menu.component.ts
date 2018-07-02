import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-row-context-menu',
  templateUrl: './user-row-context-menu.component.html',
  styleUrls: ['./user-row-context-menu.component.scss']
})
export class UserRowContextMenuComponent implements OnInit {
  @Input('isCoach') isCoach: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
