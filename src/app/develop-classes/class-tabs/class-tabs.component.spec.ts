import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ClassTabsComponent } from './class-tabs.component';
import { ConflictPipe } from '../../pipes/conflict.pipe';
import { MotivesHtmlPipe } from '../../pipes/motives-html.pipe';

import { DevelopClassesComponent } from '../develop-classes.component';
import { ClassTableComponent } from '../class-table/class-table.component';
import { BackHeaderComponent } from '../back-header/back-header.component';

import { ClassOverviewComponent } from '../class-overview/class-overview.component';
import { ClassPreworkComponent } from '../class-prework/class-prework.component';
import { ClassPostpreworkComponent } from '../class-postprework/class-postprework.component';
import { SessionTableComponent } from '../session-table/session-table.component';
import { ClassWorkComponent } from '../class-work/class-work.component';
import { ErrorAlertComponent } from '../error-alert/error-alert.component';

import { ClassService } from '../../providers/class.service';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('ClassTabsComponent', () => {
  let component: ClassTabsComponent;
  let fixture: ComponentFixture<ClassTabsComponent>;

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
        HttpClientTestingModule,
        TranslationModule.forRoot(l10nConfig),
        RouterModule,
        RouterTestingModule
      ],
      declarations: [
        ClassTabsComponent,
        ClassTableComponent,
        BackHeaderComponent,
        ClassOverviewComponent,
        ClassPreworkComponent,
        ClassPostpreworkComponent,
        SessionTableComponent,
        ClassWorkComponent,
        ErrorAlertComponent,
        ConflictPipe,
        MotivesHtmlPipe
      ],
      providers: [
        ClassService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTabsComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
