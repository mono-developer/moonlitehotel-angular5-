import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClassTableComponent } from './class-table.component';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('ClassTableComponent', () => {
  let component: ClassTableComponent;
  let fixture: ComponentFixture<ClassTableComponent>;
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
        HttpClientTestingModule,
        TranslationModule.forRoot(l10nConfig),
      ],
      declarations: [ ClassTableComponent ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTableComponent);
    component = fixture.componentInstance;
    component.classes = [
      {
        id: 'a44fca', name: 'Talent Development', group: 'HR', type: 'Results through Relationships', date: [
          {start: '2017-07-12T09:30:00-04:00', end: '2017-07-12T10:30:00-04:00'}
        ], location: 'New York, NY', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
        facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
          categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
          profile: 'assets/img/teams/profile.png'
        }
      },
      {
        id: 'a44fcb', name: 'Procurement Team Management', group: 'Audit Team', type: 'Results through Relationships', date: [
          {start: '2017-10-01T09:30:00-04:00', end: '2017-10-01T14:00:00-04:00'},
          {start: '2017-10-11T10:30:00-04:00', end: '2017-10-11T11:30:00-04:00'}
        ], location: 'Dallas, TX', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
        facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
          categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
          profile: 'assets/img/teams/profile.png'
        }
      },
      {
        id: 'a44fcd', name: 'Procurement Team Management', group: 'Audit Team', type: 'Results through Relationships', date: [
          {start: '2018-07-11T09:30:00-04:00', end: '2018-07-11T14:00:00-04:00'}
        ], location: 'Dallas, TX', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
        facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
          categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
          profile: 'assets/img/teams/profile.png'
        }
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
