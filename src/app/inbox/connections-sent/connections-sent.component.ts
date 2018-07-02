import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';
import { InboxUser } from '../../models/user';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-connections-sent',
  templateUrl: './connections-sent.component.html',
  styleUrls: ['./connections-sent.component.scss']
})
export class ConnectionsSentComponent implements OnInit, OnDestroy {
  connections: InboxUser[];
  searchedConnections: InboxUser[];
  sortOrders = [false, false];
  search$: Subscription;

  constructor(private userService: UserService) {
    this.search$ = this.userService.getSearch()
    .subscribe( (val) => {
      this.onSearch(val.text);
    });
  }

  ngOnInit() {
    this.connections = [
      {id: '1', avatarImageUrl: 'assets/img/teams/profile.png', firstName: 'Curtis', lastName: 'Thompson', statuses: [
        {type: 'common_text_requested', date: '2017-09-28T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-04T00:00:00-06:00'}
      ]},
      {id: '2', avatarImageUrl: 'assets/img/teams/profile.png', firstName: 'Chloe', lastName: 'Davis', statuses: [
        {type: 'common_text_requested', date: '2017-09-28T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-08T00:00:00-06:00'}
      ]},
      {id: '3', avatarImageUrl: 'assets/img/teams/profile.png', firstName: 'Ella', lastName: 'Lewis', statuses: [
        {type: 'common_text_requested', date: '2017-09-28T00:00:00-06:00'},
        {type: 'common_text_requested', date: '2017-10-03T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-03T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-06T00:00:00-06:00'},
        {type: 'inbox_reminded_text', date: '2017-10-12T00:00:00-06:00'}
      ]}
    ];

    this.connections = this.userService.getShortStauses(this.connections);
    this.onSearch('');
  }

  ngOnDestroy() {
    this.search$.unsubscribe();
  }

  onSearch(val: string) {
    if (val) {
      this.searchedConnections = this.connections.filter((connection: InboxUser) => {
        const searchVal = val.toLowerCase();
        return connection.lastName.toLowerCase().indexOf(searchVal) >= 0 || connection.firstName.toLowerCase().indexOf(searchVal) >= 0;
      });
    } else {
      this.searchedConnections = this.connections;
    }
  }

  onOrderConnection(index: number) {
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
        this.connections = _.orderBy(this.connections, 'lastName', orderWay);
        break;
      }
      case 1:
      {
        this.connections = _.orderBy(this.connections, 'lastStatusDate', orderWay);
        break;
      }
    }
  }

  trackByIndex(index: number) {
    return index;
  }

  trackById(index: number, item: InboxUser) {
    return item.id;
  }

}
