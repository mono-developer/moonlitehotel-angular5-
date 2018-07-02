import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, Config } from '../user';

@Component({
  selector: 'app-coaching-page',
  templateUrl: './coaching-page.component.html',
  styleUrls: ['./coaching-page.component.scss']
})
export class CoachingPageComponent implements OnInit {
  config: Config;
  isOpenedFilter: boolean = false;
  org: string = 'org';
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.org = this.route.snapshot.paramMap.get('org');
    switch (this.org) {
      case 'org': {
        this.config = {
          coachVisible: true,
          headerTitle: 'coach_select_members_coaching_relationship',
          actionBtnText: 'train_add_selected',
          userBtn: 'coach_add',
          contextMenu: true,
          isAlphaBet: true,
          isPagination: true,
          filterPlaceholderTxt: 'coach_search_members',
          isRelationShipBtn: false,
          pageName: 'member',
          org: 'org'
        };
        break;
      }
      case 'org_admin': {
        this.config = {
          coachVisible: false,
          headerTitle: 'coach_select_coach',
          userBtn: 'train_select_button',
          contextMenu: false,
          isAlphaBet: true,
          isPagination: true,
          filterPlaceholderTxt: 'coach_search_members',
          isRelationShipBtn: false,
          pageName: 'member',
          org: 'org_admin'
        };
        break;
      }
      case 'coach': {
        this.config = {
          coachVisible: true,
          headerTitle: 'coach_select_members_coaching_relationship',
          actionBtnText: 'train_add_selected',
          userBtn: 'coach_add',
          contextMenu: true,
          isAlphaBet: true,
          isPagination: true,
          filterPlaceholderTxt: 'coach_search_members',
          isRelationShipBtn: false,
          pageName: 'member',
          org: 'coach'
        };
        break;
      }
    }
  }
  onOpenFilter(ev: any) {
    this.isOpenedFilter = !this.isOpenedFilter;
  }

}
