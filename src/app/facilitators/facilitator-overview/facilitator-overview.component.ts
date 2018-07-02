import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Facilitator } from '../../models/facilitator';

@Component({
  selector: 'app-facilitator-overview',
  templateUrl: './facilitator-overview.component.html',
  styleUrls: ['./facilitator-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitatorOverviewComponent implements OnInit {
  @Input('facilitator') facilitator: Facilitator;
  constructor() { }

  ngOnInit() {
  }

}
