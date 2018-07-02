import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Class } from '../class';
@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss']
})
export class ClassTableComponent implements OnInit {
  @Input('classes') classes: Class[] = [];
  @Output() clickClass = new EventEmitter<number>();
  constructor() { }

  ngOnInit() { }

  trackByIndex(index: number) {
    return index;
  }

  onClickClass(id: number) {
    this.clickClass.emit(id);
  }

  getUpcoming(date: string) {
    const today = new Date();
    const classDate = new Date(date);
    return classDate > today;

  }

}
