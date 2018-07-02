import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagingComponent implements OnInit {
  @Output() clickPage = new EventEmitter<number>();
  currentPage = 1;
  constructor() { }

  ngOnInit() {
  }
  onPageChange(ev: any) {
    this.clickPage.emit(ev);
  }

}
