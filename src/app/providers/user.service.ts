import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import * as _ from 'lodash';
import { InboxUser } from '../models/user';
import { InvitationUser } from '../models/invitation-user';

@Injectable()
export class UserService {
  private search$ = new Subject<any>();

  constructor() { }

  getShortStauses(users: any[] ) {
    const newUsers =  users.map((user: any) => {
      const lengthOfStatuses = user.statuses.length;
      user.statuses = _.orderBy(user.statuses, 'date');
      let cutLength = 4;
      if (user.needsReminder) {
        cutLength = 3;
      }
      if ( lengthOfStatuses > cutLength) {
        user.shortStatuses = user.statuses.slice( lengthOfStatuses - cutLength, lengthOfStatuses);
      } else {
        user.shortStatuses = user.statuses;
      }
      user.lastStatusDate = user.statuses[lengthOfStatuses - 1].date;
      return user;
    });
    return newUsers;
  }

  onSearch(key: string) {
    this.search$.next({ text: key });
  }

  getSearch(): Observable<any> {
    return this.search$.asObservable();
  }

}
