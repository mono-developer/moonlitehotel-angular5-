import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LocalizationModule } from 'angular-l10n';

// custom modules
import { CertRibbonModule } from '../shared/cert-ribbon/cert-ribbon.module';

// custom components
import { FacilitatorsComponent } from './facilitators.component';
import { UpcomingPreviousComponent } from './upcoming-previous/upcoming-previous.component';
import { ClassTableComponent } from './class-table/class-table.component';
import { FacilitatorOverviewComponent } from './facilitator-overview/facilitator-overview.component';
import { FacilitatorInformationComponent } from './facilitator-information/facilitator-information.component';
import { FacilitatorListComponent } from './facilitator-list/facilitator-list.component';

import { ConflictSequencePipe } from '../pipes/conflict-sequence.pipe';
import { MotivesHtmlPipe } from '../pipes/motives-html.pipe';
import { FacilitatorDetailComponent } from './facilitator-detail/facilitator-detail.component';
import {  TrainRatingComponent } from '../shared/train-rating/train-rating.component';

// service
import { FacilitatorService } from '../providers/facilitator.service';

const routes: Routes = [
  {
    path     : '',
    component: FacilitatorsComponent,
    children : [
      { path: '', component: FacilitatorListComponent },
      { path: ':id', component: FacilitatorDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizationModule,
    RouterModule.forChild(routes),
    CertRibbonModule
  ],
  declarations: [
    FacilitatorsComponent,
    UpcomingPreviousComponent,
    ClassTableComponent,
    FacilitatorOverviewComponent,
    FacilitatorInformationComponent,
    ConflictSequencePipe,
    MotivesHtmlPipe,
    FacilitatorListComponent,
    FacilitatorDetailComponent,
    TrainRatingComponent
  ],
  providers: [
    FacilitatorService
  ]
})
export class FacilitatorsModule { }
