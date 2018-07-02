import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MessageToolsTableComponent } from './message-tools-table.component';
import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('MessageToolsTableComponent', () => {
  let component: MessageToolsTableComponent;
  let fixture: ComponentFixture<MessageToolsTableComponent>;
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
        TranslationModule.forRoot(l10nConfig)
      ],
      declarations: [ MessageToolsTableComponent ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageToolsTableComponent);
    component = fixture.componentInstance;
    component.downloads = [
      {description: 'profile_text_email_signature', imgUrl: 'assets/icons/triangle.svg', example: 'example'},
      {description: 'profile_text_outlook_addin', imgUrl: 'assets/icons/outlook.svg'},
      {description: 'profile_text_skype', imgUrl: 'assets/icons/skype.svg'},
      {description: 'profile_text_slack', imgUrl: 'assets/icons/slack.svg'},
      {description: 'profile_text_microsoft', imgUrl: 'assets/icons/microsoft_teams_logo.svg'}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
