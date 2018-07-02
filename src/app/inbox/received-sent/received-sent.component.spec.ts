import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FilterSearchbarModule } from '../../shared/filter-searchbar/filter-searchbar.module';

import { ReceivedSentComponent } from './received-sent.component';
import { TabPageHeaderComponent } from '../tab-page-header/tab-page-header.component';
import { ConnectionsSentComponent } from '../connections-sent/connections-sent.component';
import { ConnectionsReceivedComponent } from '../connections-received/connections-received.component';
import { InvitationsSentComponent } from '../invitations-sent/invitations-sent.component';
import { InvitationsReceivedComponent } from '../invitations-received/invitations-received.component';
import { FilterComponent } from '../filter/filter.component';
import { PagingModule } from '../../shared/paging/paging.module';

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

describe('ReceivedSentComponent', () => {
  let component: ReceivedSentComponent;
  let fixture: ComponentFixture<ReceivedSentComponent>;
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
        TranslationModule.forRoot(l10nConfig),
        HttpClientTestingModule,
        FilterSearchbarModule,
        PagingModule
      ],
      declarations: [
        ReceivedSentComponent,
        TabPageHeaderComponent,
        ConnectionsSentComponent,
        ConnectionsReceivedComponent,
        InvitationsSentComponent,
        InvitationsReceivedComponent,
        FilterComponent
      ],
      providers: [
        UserService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedSentComponent);
    component = fixture.componentInstance;
    component.state = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
