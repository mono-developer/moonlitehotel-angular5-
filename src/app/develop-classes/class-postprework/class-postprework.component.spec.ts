import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ClassPostpreworkComponent } from './class-postprework.component';
import { SessionTableComponent } from '../session-table/session-table.component';
import { ClassWorkComponent } from '../class-work/class-work.component';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';
import { BackHeaderComponent } from '../back-header/back-header.component';
import { ClassOverviewComponent } from '../class-overview/class-overview.component';

import { ConflictPipe } from '../../pipes/conflict.pipe';
import { MotivesHtmlPipe } from '../../pipes/motives-html.pipe';

import { ClassService } from '../../providers/class.service';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('ClassPostpreworkComponent', () => {
  let component: ClassPostpreworkComponent;
  let fixture: ComponentFixture<ClassPostpreworkComponent>;
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

  class ClassServiceSpy {
    class = {
      id: 'a44fca', name: 'Talent Development', group: 'HR', type: 'Results through Relationships', date: [
        {start: '2017-07-12T09:30:00-04:00', end: '2017-07-12T10:30:00-04:00'}
      ], location: 'New York, NY', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    };

    getClassById = jasmine.createSpy('getClassById').and.callFake(
      () => this.class
    );
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule,
        RouterTestingModule,
        TranslationModule.forRoot(l10nConfig)
      ],
      declarations: [
        BackHeaderComponent,
        ClassOverviewComponent,
        ClassPostpreworkComponent,
        SessionTableComponent,
        ClassWorkComponent,
        ErrorAlertComponent,
        ConflictPipe,
        MotivesHtmlPipe
      ],
      providers: [
        { provide: ClassService, useClass: ClassServiceSpy }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassPostpreworkComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
