import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sdi-table',
  templateUrl: './sdi-table.component.html',
  styleUrls: ['./sdi-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SdiTableComponent implements OnInit {
  inventory: any;
  constructor() { }

  ngOnInit() {
    this.inventory = {
      version: 'navigation_sdi_20', date: '2018-04-30T00:00:00-06:00', motives: 'hub',
      conflicts: 'br_g', strengths: ['navigation_strengths_inclusive', 'navigation_strengths_flexible', 'navigation_strengths_risk_taking']
    };
  }

  trackByIndex(index: number) {
    return index;
  }

}
