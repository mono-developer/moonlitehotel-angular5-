import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GrayHeaderComponent } from './gray-header.component';
import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('GrayHeaderComponent', () => {
  let component: GrayHeaderComponent;
  let fixture: ComponentFixture<GrayHeaderComponent>;
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
      declarations: [ GrayHeaderComponent ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayHeaderComponent);
    component = fixture.componentInstance;
    component.title = 'discover_sections_reasons_walkthrough_title';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
