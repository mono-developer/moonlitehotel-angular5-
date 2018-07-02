import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Language } from 'angular-l10n';
// facilitator model
import { Facilitator } from '../../models/facilitator';

import { FacilitatorService } from '../../providers/facilitator.service';

@Component({
  selector: 'app-facilitator-list',
  templateUrl: './facilitator-list.component.html',
  styleUrls: ['./facilitator-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FacilitatorListComponent implements OnInit {
  @Language() lang: string;

  facilitators: Facilitator[];
  searchedFacilitators: Facilitator[];

  searchValue: string = '';
  keyUp = new Subject<string>();

  constructor(private facilitatorService: FacilitatorService) { }

  ngOnInit() {
    const subscription = this.keyUp
      .map((event: any) => event.target.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((data) => {
        this.searchFacilitator();
      });
    this.facilitators = this.facilitatorService.getFacilitators();
    this.searchedFacilitators = this.facilitators;
  }

  searchFacilitator() {
    if (this.searchValue) {
      this.searchedFacilitators = this.facilitators.filter((facilitator: Facilitator) => {
        const searchVal = this.searchValue.toLowerCase();
        return facilitator.name.toLowerCase().indexOf(searchVal) >= 0;
      });
    } else {
      this.searchedFacilitators = this.facilitators;
    }
  }

  trackByIndex(index: number) {
    return index;
  }

  trackByFacilitatorId(index: number, item: Facilitator) {
    return item.id;
  }

}
