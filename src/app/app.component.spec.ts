import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {
  L10nConfig,
  L10nLoader,
  StorageStrategy,
  ProviderType,
  LocalizationModule,
  LocaleValidationModule
} from 'angular-l10n';

describe('AppComponent', () => {
  let l10nLoader: L10nLoader;
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
      providers: [
        // Karma serves files from 'base' relative path.
        { type: ProviderType.Static, prefix: 'assets/locale-' }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        LocalizationModule.forRoot(l10nConfig),
        LocaleValidationModule.forRoot(),
        HttpClientModule,
        HttpClientTestingModule,
        RouterModule,
        RouterTestingModule

      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('moon-lite');
  }));
});
