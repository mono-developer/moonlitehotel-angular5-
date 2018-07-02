import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ConflictPipe } from '../../pipes/conflict.pipe';
import { MotivesHtmlPipe } from '../../pipes/motives-html.pipe';

import { ClassOverviewComponent } from './class-overview.component';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('ClassOverviewComponent', () => {
  let component: ClassOverviewComponent;
  let fixture: ComponentFixture<ClassOverviewComponent>;
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
      declarations: [
        ClassOverviewComponent,
        ConflictPipe,
        MotivesHtmlPipe
      ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassOverviewComponent);
    component = fixture.componentInstance;
    component.class = {
      id: 'a44fca', name: 'Talent Development', group: 'HR', type: 'Results through Relationships', date: [
        {start: '2017-07-12T09:30:00-04:00', end: '2017-07-12T10:30:00-04:00'}
      ], location: 'New York, NY', language: 'language_english', prework: '2017-09-25T09:30:00-04:00',
      facilitator: {name: 'Susan Anderson', title: 'Director of HR', motive: 'hub', conflict: 'br_g',
        categories: ['category_methodical', 'category_sociable', 'category_ambitious'],
        profile: 'assets/img/teams/profile.png'
      }
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
