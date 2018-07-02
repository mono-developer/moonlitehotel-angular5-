import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Facilitator } from '../../models/facilitator';

import { FacilitatorOverviewComponent } from './facilitator-overview.component';
import { CertRibbonComponent } from '../../shared/cert-ribbon/cert-ribbon.component';
import { TrainRatingComponent } from '../../shared/train-rating/train-rating.component';

import { ConflictSequencePipe } from '../../pipes/conflict-sequence.pipe';
import { MotivesHtmlPipe } from '../../pipes/motives-html.pipe';

import {
  Language,
  L10nConfig,
  L10nLoader,
  TranslationModule,
  LocaleService,
  StorageStrategy,
  ProviderType
} from 'angular-l10n';

describe('FacilitatorOverviewComponent', () => {
  let component: FacilitatorOverviewComponent;
  let fixture: ComponentFixture<FacilitatorOverviewComponent>;

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
      declarations: [
        FacilitatorOverviewComponent,
        CertRibbonComponent,
        TrainRatingComponent,
        ConflictSequencePipe,
        MotivesHtmlPipe
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    l10nLoader = TestBed.get(L10nLoader);
    l10nLoader.load();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitatorOverviewComponent);
    component = fixture.componentInstance;
    // mock the facilitator supplied by the parent component
    const expectedFacilitator: Facilitator = {
      id: 'US12247', name: 'Cindy Capello', job_title: 'HR Benefits Admin', profile: 'assets/img/teams/profile.png',
      state: 'PREMIER', rating: 4.35, motives: 'blue', conflicts: 'b_r_g', evalutions_count: 125, trained_count: 17, learners_count: 312,
      toolkits_count: 14, credits_count: 30, certifications: [{name: 'CSA', isVerified: true}, {name: 'CSR', isVerified: true}],
      upcoming_classes: [{
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }],
      previous_classes: [{
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSA', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      },
      {
        type: 'CSR', name: "Designer's test certification", group_name: 'Design Team', location: 'Detroit, MI',
        date: '2018-04-30T00:00:00-06:00', count: 30, incompleted: 12
      }]
    };

    // simulate the parent setting the input property with that facilitator
    component.facilitator = expectedFacilitator;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
