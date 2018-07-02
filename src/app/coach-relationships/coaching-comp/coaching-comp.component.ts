import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Subscription } from 'rxjs/Subscription';
import { User, Config } from '../user';
import { CoachServiceService } from '../../providers/coach-service.service';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-coaching-comp',
  templateUrl: './coaching-comp.component.html',
  styleUrls: ['./coaching-comp.component.scss']
})
export class CoachingCompComponent implements OnInit, OnDestroy {
  @Input('config') config: Config;
  users: User[] = [];
  searchedUsers: User[] = [];
  isOpenedFilter: boolean = false;
  search$: Subscription;

  constructor(private coachService: CoachServiceService, private userService: UserService) {
    this.search$ = this.userService.getSearch()
    .subscribe( (val) => {
      this.onSearch(val.text);
    });
  }

  ngOnInit() {
    this.users = this.coachService.getCoaches(`${this.config.org}${this.config.pageName}`);
    this.searchedUsers = this.users;
  }

  ngOnDestroy() {
    this.search$.unsubscribe();
  }

  onOpenFilter(ev: any) {
    this.isOpenedFilter = !this.isOpenedFilter;
  }

  onSearch(val: string) {
    if (val) {
      this.searchedUsers = this.users.filter((user: User) => {
        const searchVal = val.toLowerCase();
        return user.lastName.toLowerCase().indexOf(searchVal) >= 0 || user.firstName.toLowerCase().indexOf(searchVal) >= 0;
      });
    } else {
      this.searchedUsers = this.users;
    }
  }

}
