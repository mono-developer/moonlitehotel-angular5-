import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserRowContextMenuComponent } from './user-row-context-menu.component';
import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('UserRowContextMenuComponent', () => {
  let component: UserRowContextMenuComponent;
  let fixture: ComponentFixture<UserRowContextMenuComponent>;
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
      declarations: [ UserRowContextMenuComponent ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowContextMenuComponent);
    component = fixture.componentInstance;
    component.isCoach = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
