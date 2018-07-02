import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Facilitator } from '../../models/facilitator';
import { FacilitatorService } from '../../providers/facilitator.service';

@Component({
  selector: 'app-facilitator-detail',
  templateUrl: './facilitator-detail.component.html',
  styleUrls: ['./facilitator-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitatorDetailComponent implements OnInit {
  @Input() id: string = '';
  facilitator: Facilitator;
  isLoading: boolean = false;
  constructor(private route: ActivatedRoute, private location: Location, private facilitatorService: FacilitatorService) { }

  ngOnInit() {
    this.id = this.id || this.route.snapshot.paramMap.get('id');
    this.getFacilitator();
  }

  getFacilitator(): void {
    this.facilitator = this.facilitatorService.getFacilitatorByid(this.id);
    this.isLoading = true;
  }

  gotoBack() {
    this.location.back();
  }

}
