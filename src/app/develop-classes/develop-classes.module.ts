import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LocalizationModule } from 'angular-l10n';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ConflictPipe } from '../pipes/conflict.pipe';
import { MotivesHtmlPipe } from '../pipes/motives-html.pipe';

import { DevelopClassesComponent } from './develop-classes.component';
import { ClassTabsComponent } from './class-tabs/class-tabs.component';
import { ClassTableComponent } from './class-table/class-table.component';
import { BackHeaderComponent } from './back-header/back-header.component';

import { ClassService } from '../providers/class.service';
import { ClassOverviewComponent } from './class-overview/class-overview.component';
import { ClassPreworkComponent } from './class-prework/class-prework.component';
import { ClassPostpreworkComponent } from './class-postprework/class-postprework.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { ClassWorkComponent } from './class-work/class-work.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';

const routes: Routes = [
  {
      path     : '',
      component: DevelopClassesComponent,
      children : [
        { path: '', component: ClassTabsComponent },
        { path: ':category/:id', component: ClassPreworkComponent },
        { path: 'postprework/:category/:id', component: ClassPostpreworkComponent }
      ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    LocalizationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    DevelopClassesComponent,
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
  ]
})
export class DevelopClassesModule { }
