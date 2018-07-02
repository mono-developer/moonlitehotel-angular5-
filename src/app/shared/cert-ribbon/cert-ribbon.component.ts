import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Certification } from '../../models/facilitator';

@Component({
  selector: 'app-cert-ribbon',
  templateUrl: './cert-ribbon.component.html',
  styleUrls: ['./cert-ribbon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CertRibbonComponent implements OnInit {
  @Input('state') state: string;
  @Input('certs') certs: Certification[];
  constructor() { }

  ngOnInit() {
  }
  trackByIndex(index: number) {
    return index;
  }

}
