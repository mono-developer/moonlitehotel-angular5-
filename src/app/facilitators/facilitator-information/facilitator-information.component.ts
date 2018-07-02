import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FacilitatorUser } from '../../models/user';

@Component({
  selector: 'app-facilitator-information',
  templateUrl: './facilitator-information.component.html',
  styleUrls: ['./facilitator-information.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitatorInformationComponent implements OnInit {
  partner: FacilitatorUser = {
    type: 'Client Partner', name: 'John Thill', job_title: 'Principal',
    region: 'West Region', email: 'John@corestrengths.com', phone: '760-827-1723', profile: 'assets/img/teams/profile4.png'
  };

  supportUser: FacilitatorUser = {
    type: 'Client Support', name: 'Kyle Menig', job_title: 'Facilitator Community Coach',
    region: 'West Region', email: 'kyle@corestrengths.com', phone: '760-827-1730', profile: 'assets/img/teams/profile5.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
