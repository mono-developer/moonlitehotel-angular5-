import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FacilitatorListComponent } from './facilitator-list.component';
import { FacilitatorInformationComponent } from '../facilitator-information/facilitator-information.component';

import { FacilitatorService } from '../../providers/facilitator.service';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('FacilitatorListComponent', () => {
  let component: FacilitatorListComponent;
  let fixture: ComponentFixture<FacilitatorListComponent>;

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
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        RouterModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslationModule.forRoot(l10nConfig)
      ],
      declarations: [
        FacilitatorListComponent,
        FacilitatorInformationComponent
      ],
      providers: [
        FacilitatorService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be no results', () => {
    component.ngOnInit();
    component.searchValue = 'sss';
    component.searchFacilitator();
    fixture.detectChanges();
    const listComp = fixture.nativeElement.querySelector('.facilitator-item');
    expect(listComp).toBeFalsy();
  });

  it('should be results', () => {
    component.ngOnInit();
    component.searchValue = 'Cindy';
    component.searchFacilitator();
    fixture.detectChanges();
    const listComp = fixture.nativeElement.querySelector('.facilitator-item');
    expect(listComp).toBeTruthy();
  });
});
