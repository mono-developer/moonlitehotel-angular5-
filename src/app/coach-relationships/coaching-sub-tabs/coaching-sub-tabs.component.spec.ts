import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterSearchbarModule } from '../../shared/filter-searchbar/filter-searchbar.module';
import { PagingModule } from '../../shared/paging/paging.module';

import { CoachingSubTabsComponent } from './coaching-sub-tabs.component';
import { RelationshipButtonComponent } from '../relationship-button/relationship-button.component';
import { AlphabetNavComponent } from '../alphabet-nav/alphabet-nav.component';
import { CoachRelationshipsComponent } from '../coach-relationships.component';
import { UserRowComponent } from '../user-row/user-row.component';
import { UserTableComponent } from '../user-table/user-table.component';
import { UserRowContextMenuComponent } from '../user-row-context-menu/user-row-context-menu.component';

import { UserTableHeaderComponent } from '../user-table-header/user-table-header.component';
import { MotivesHtmlPipe } from '../../pipes/motives-html.pipe';
import { CoachHeaderComponent } from '../coach-header/coach-header.component';
import { CoachFilterComponent } from '../coach-filter/coach-filter.component';
import { CoachingCompComponent } from '../coaching-comp/coaching-comp.component';

import { CoachServiceService } from '../../providers/coach-service.service';
import { UserService } from '../../providers/user.service';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('CoachingSubTabsComponent', () => {
  let component: CoachingSubTabsComponent;
  let fixture: ComponentFixture<CoachingSubTabsComponent>;
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
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        HttpClientTestingModule,
        TranslationModule.forRoot(l10nConfig),
        FilterSearchbarModule,
        PagingModule
      ],
      declarations: [
        CoachingSubTabsComponent,
        RelationshipButtonComponent,
        AlphabetNavComponent,
        CoachRelationshipsComponent,
        UserRowComponent,
        UserTableComponent,
        UserRowContextMenuComponent,
        UserTableHeaderComponent,
        MotivesHtmlPipe,
        CoachHeaderComponent,
        CoachFilterComponent,
        CoachingCompComponent
      ],
      providers: [
        UserService,
        CoachServiceService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachingSubTabsComponent);
    component = fixture.componentInstance;
    component.organization = 'coach';
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
