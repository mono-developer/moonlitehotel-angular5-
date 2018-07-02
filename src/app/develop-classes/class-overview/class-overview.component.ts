import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Class } from '../class';

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassOverviewComponent implements OnInit {
  @Input('class') class: Class;
  constructor() { }

  ngOnInit() {
  }
  trackByIndex(index: number) {
    return index;
  }

}
