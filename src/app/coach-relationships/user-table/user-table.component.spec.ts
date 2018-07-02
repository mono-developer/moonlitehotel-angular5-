import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagingModule } from '../../shared/paging/paging.module';
import { UserTableComponent } from './user-table.component';
import { AlphabetNavComponent } from '../alphabet-nav/alphabet-nav.component';
import { UserRowComponent } from '../user-row/user-row.component';
import { UserRowContextMenuComponent } from '../user-row-context-menu/user-row-context-menu.component';
import { UserTableHeaderComponent } from '../user-table-header/user-table-header.component';
import { MotivesHtmlPipe } from '../../pipes/motives-html.pipe';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;
  let l10nLoader: L10nLoader;

  const translationEN: any = require('../../../assets/locale-en.json');
  const l10nConfig: L10nConfig = {
    locale: {
      languages: [
        { code: 'en', dir: 'ltr' }
      ],
      defaultLocale: { languageCode: 'en', countryCode: 'US' },
      currency: 'USD',
      storage: StorageStrategy.Disabled
    },
    translation: {
      translationData: [
        { languageCode: 'en', data: translationEN }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot(),
        HttpClientTestingModule,
        TranslationModule.forRoot(l10nConfig),
        PagingModule
      ],
      declarations: [
        UserTableComponent,
        AlphabetNavComponent,
        UserRowComponent,
        UserRowContextMenuComponent,
        UserTableHeaderComponent,
        MotivesHtmlPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    component.users = [
      {firstName: 'Kent', lastName: 'Washington', mvs: 'red_blue', title: 'Chief Councel',
      role: 'coach', profile: 'assets/img/teams/profile.png'},
      {firstName: 'Mark', lastName: 'Logan', mvs: 'red', title: 'Structure Engineer',
      role: 'coach', profile: 'assets/img/teams/profile.png'},
      {firstName: 'Victoria', lastName: 'Patel', mvs: 'red_blue', title: 'Director',
      role: 'coach', profile: 'assets/img/teams/profile.png'},
    ];

    component.config = {
      coachVisible: false,
      actionBtnText: 'inventory_draft_invitation',
      contextMenu: false,
      isAlphaBet: true,
      isPagination: true,
      filterPlaceholderTxt: 'coach_search_coaches',
      isRelationShipBtn: true,
      pageName: 'roster',
      org: 'coach'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
