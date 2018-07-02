import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DownloadComponent } from './download.component';
import { GrayHeaderComponent } from './gray-header/gray-header.component';
import { SdiTableComponent } from './sdi-table/sdi-table.component';
import { StrengthDownloadComponent } from './strength-download/strength-download.component';
import { MeetingToolsTableComponent } from './meeting-tools-table/meeting-tools-table.component';
import { MessageToolsTableComponent } from './message-tools-table/message-tools-table.component';
import { ConversationToolsTableComponent } from './conversation-tools-table/conversation-tools-table.component';

import { ConflictPipe } from '../pipes/conflict.pipe';
import { MotivesHtmlPipe } from '../pipes/motives-html.pipe';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('DownloadComponent', () => {
  let component: DownloadComponent;
  let fixture: ComponentFixture<DownloadComponent>;
  let l10nLoader: L10nLoader;

  const translationEN: any = require('../../assets/locale-en.json');
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
        TranslationModule.forRoot(l10nConfig)
      ],
      declarations: [
        DownloadComponent,
        GrayHeaderComponent,
        SdiTableComponent,
        StrengthDownloadComponent,
        MeetingToolsTableComponent,
        MessageToolsTableComponent,
        ConversationToolsTableComponent,
        ConflictPipe,
        MotivesHtmlPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
