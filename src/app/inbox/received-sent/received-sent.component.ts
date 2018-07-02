import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-received-sent',
  templateUrl: './received-sent.component.html',
  styleUrls: ['./received-sent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReceivedSentComponent implements OnInit {
  @Input('state') state: number;
  isOpenedFilter: boolean = false;
  searchValue: string = '';
  constructor() { }

  ngOnInit() {
  }

  onOpenFilter( flag: boolean ) {
    this.isOpenedFilter = flag;
  }
  onSearch( searchVal: string) {
    this.searchValue = searchVal;
  }

}
