import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StrengthDownloadComponent } from './strength-download.component';
import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('StrengthDownloadComponent', () => {
  let component: StrengthDownloadComponent;
  let fixture: ComponentFixture<StrengthDownloadComponent>;
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
      declarations: [ StrengthDownloadComponent ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrengthDownloadComponent);
    component = fixture.componentInstance;
    component.type = '360';
    component.downloads = [
      {
        type: '360', provider: 'Mark Logan', date: '2017-04-18T00:00:00-06:00', strengths: [
          'navigation_strengths_inclusive', 'navigation_strengths_flexible', 'navigation_strengths_risk_taking'
        ]
      },
      {
        type: '360', provider: 'Janice lee', date: '2016-01-07T00:00:00-06:00', strengths: [
          'navigation_strengths_inclusive', 'navigation_strengths_caring', 'navigation_strengths_sociable'
        ]
      },
      {
        type: '360', provider: 'Amy Chang', date: '2014-06-22T00:00:00-06:00', strengths: [
          'navigation_strengths_caring', 'navigation_strengths_inclusive', 'navigation_strengths_flexible'
        ]
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
