import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Language } from 'angular-l10n';

import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-filter-searchbar',
  templateUrl: './filter-searchbar.component.html',
  styleUrls: ['./filter-searchbar.component.scss']
})
export class FilterSearchbarComponent implements OnInit {
  isOpened: boolean = false;
  @Language() lang: string;
  @Input('palcefolder') palcefolder: string;
  @Output() openFilter = new EventEmitter<boolean>();

  searchValue: string = '';
  keyUp = new Subject<string>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    const subscription = this.keyUp
      .map((event: any) => event.target.value)
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((data) => {
        this.searchUsers();
      });
  }
  open() {
    this.isOpened = !this.isOpened;
    this.openFilter.emit(this.isOpened);
  }

  searchUsers() {
    this.userService.onSearch(this.searchValue);
  }

}
