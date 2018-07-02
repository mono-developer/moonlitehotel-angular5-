import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Config } from '../user';

@Component({
  selector: 'app-coaching-sub-tabs',
  templateUrl: './coaching-sub-tabs.component.html',
  styleUrls: ['./coaching-sub-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoachingSubTabsComponent implements OnInit {
  @Input('organization') organization: string = 'coach';
  rosterConfig: Config;
  invitationConfig: Config;
  reminderConfig: Config;
  archiveConfig: Config;

  constructor() { }

  ngOnInit() {
    this.rosterConfig = {
      coachVisible: false,
      actionBtnText: 'inventory_draft_invitation',
      contextMenu: false,
      isAlphaBet: true,
      isPagination: true,
      filterPlaceholderTxt: 'coach_search_coaches',
      isRelationShipBtn: true,
      pageName: 'roster',
      org: this.organization
    };
    this.invitationConfig = {
      coachVisible: false,
      actionBtnText: 'inventory_draft_invitation',
      contextMenu: true,
      isAlphaBet: false,
      isPagination: true,
      filterPlaceholderTxt: 'coach_search_coaches',
      pageName: 'invitation',
      org: this.organization
    };
    this.reminderConfig = {
      coachVisible: false,
      actionBtnText: 'inventory_draft_reminder',
      contextMenu: true,
      isAlphaBet: false,
      isPagination: true,
      filterPlaceholderTxt: 'coach_search_coaches',
      isRelationShipBtn: false,
      pageName: 'reminder',
      org: this.organization
    };

    this.archiveConfig = {
      coachVisible: false,
      actionBtnText: 'coach_unarchive_selected_button',
      userBtn: 'coach_unarchive_button',
      contextMenu: false,
      isAlphaBet: true,
      isPagination: true,
      filterPlaceholderTxt: 'coach_search_coaches',
      isRelationShipBtn: true,
      pageName: 'archive',
      org: this.organization
    };
  }

}
