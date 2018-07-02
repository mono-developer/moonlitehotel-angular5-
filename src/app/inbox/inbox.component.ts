import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InboxComponent implements OnInit {
  isOpenAlert: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onCloseAlert(flag: boolean) {
    this.isOpenAlert = flag;
  }

}
