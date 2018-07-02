import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';
import { InvitationUser } from '../../models/invitation-user';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-invitations-sent',
  templateUrl: './invitations-sent.component.html',
  styleUrls: ['./invitations-sent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvitationsSentComponent implements OnInit, OnDestroy {
  invitations: InvitationUser[];
  searchedInvitations: InvitationUser[];
  sortOrders = [false, false, false, false];
  search$: Subscription;

  constructor(private userService: UserService) {
    this.search$ = this.userService.getSearch()
    .subscribe( (val) => {
      this.onSearch(val.text);
    });
  }

  ngOnInit() {
    this.invitations = [
      {id: '1', avatarImageUrl: 'assets/img/teams/profile.png', firstName: 'Curtis', lastName: 'Thompson', needsReminder: false,
      invitationType: 'SDI 2.0 Invitation', dueDate: '2017-09-28T00:00:00-06:00', eventDate: '2017-09-28T00:00:00-06:00',
      statuses: [
        {type: 'common_text_requested', date: '2017-09-28T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-04T00:00:00-06:00'}
      ]},
      {id: '2', avatarImageUrl: 'assets/img/teams/profile.png', firstName: 'Chloe', lastName: 'Davis', needsReminder: false,
      invitationType: 'SDI 2.0 Reminder', dueDate: '2017-10-04T00:00:00-06:00', eventDate: '2017-10-06T00:00:00-06:00',
      statuses: [
        {type: 'common_text_requested', date: '2017-09-28T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-08T00:00:00-06:00'}
      ]},
      {id: '3', avatarImageUrl: 'assets/img/teams/profile.png', firstName: 'Ella', lastName: 'Lewis', needsReminder: true,
      invitationType: 'Class Invitation', dueDate: '2017-10-07T00:00:00-06:00', eventDate: '2017-10-04T00:00:00-06:00',
      statuses: [
        {type: 'common_text_requested', date: '2017-09-28T00:00:00-06:00'},
        {type: 'common_text_requested', date: '2017-10-03T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-03T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-06T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-12T00:00:00-06:00'}
      ]}
    ];

    this.invitations = this.userService.getShortStauses(this.invitations);
    this.onSearch('');
  }
  ngOnDestroy() {
    this.search$.unsubscribe();
  }

  onSearch(val: string) {
    if (val) {
      this.searchedInvitations = this.invitations.filter((invitation: InvitationUser) => {
        const searchVal = val.toLowerCase();
        return invitation.lastName.toLowerCase().indexOf(searchVal) >= 0 || invitation.firstName.toLowerCase().indexOf(searchVal) >= 0;
      });
    } else {
      this.searchedInvitations = this.invitations;
    }
  }

  onOrderInvitations(index: number) {
    this.sortOrders = this.sortOrders.map((order: boolean, orderIndex: number) => {
      if (orderIndex === index) {
        return !order;
      }
      return false;
    });
    const orderWay = this.sortOrders[index] ? 'desc' : 'asc';
    switch (index) {
      case 0:
      {
        this.invitations = _.orderBy(this.invitations, 'lastName', orderWay);
        break;
      }
      case 1:
      {
        this.invitations = _.orderBy(this.invitations, 'dueDate', orderWay);
        break;
      }
      case 2:
      {
        this.invitations = _.orderBy(this.invitations, 'eventDate', orderWay);
        break;
      }
      case 3:
      {
        this.invitations = _.orderBy(this.invitations, 'lastStatusDate', orderWay);
        break;
      }
    }
  }

  trackByIndex(index: number) {
    return index;
  }

  trackById(index: number, item: InvitationUser) {
    return item.id;
  }

}
