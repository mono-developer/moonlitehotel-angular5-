import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CertificationClass } from '../../models/facilitator';

@Component({
  selector: 'app-class-table',
  templateUrl: './class-table.component.html',
  styleUrls: ['./class-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassTableComponent implements OnInit {
  @Input('items') items: CertificationClass[];
  constructor() { }

  ngOnInit() {
  }

  trackByIndex(index: number) {
    return index;
  }

}
