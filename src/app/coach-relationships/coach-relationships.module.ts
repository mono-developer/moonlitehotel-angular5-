import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizationModule } from 'angular-l10n';

import { FilterSearchbarModule } from '../shared/filter-searchbar/filter-searchbar.module';
import { PagingModule } from '../shared/paging/paging.module';

import { UserService } from '../providers/user.service';
import { CoachServiceService } from '../providers/coach-service.service';

import { RelationshipButtonComponent } from './relationship-button/relationship-button.component';
import { AlphabetNavComponent } from './alphabet-nav/alphabet-nav.component';
import { CoachRelationshipsComponent } from './coach-relationships.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserRowContextMenuComponent } from './user-row-context-menu/user-row-context-menu.component';

import { UserTableHeaderComponent } from './user-table-header/user-table-header.component';
import { MotivesHtmlPipe } from '../pipes/motives-html.pipe';
import { CoachHeaderComponent } from './coach-header/coach-header.component';
import { CoachFilterComponent } from './coach-filter/coach-filter.component';
import { CoachingPageComponent } from './coaching-page/coaching-page.component';
import { CoachingCompComponent } from './coaching-comp/coaching-comp.component';
import { CoachingMainTabsComponent } from './coaching-main-tabs/coaching-main-tabs.component';
import { CoachingSubTabsComponent } from './coaching-sub-tabs/coaching-sub-tabs.component';
import { CoachMainPageComponent } from './coach-main-page/coach-main-page.component';

const routes: Routes = [
  {
      path     : '',
      component: CoachRelationshipsComponent,
      children : [
        { path: '', redirectTo: '/coach-relationships/org_admin', pathMatch: 'full'},
        { path: ':org', component: CoachMainPageComponent },
        { path: 'select/:org', component: CoachingPageComponent }
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
    FilterSearchbarModule,
    PagingModule
  ],
  declarations: [
    RelationshipButtonComponent,
    AlphabetNavComponent,
    CoachRelationshipsComponent,
    UserRowComponent,
    UserTableComponent,
    UserRowContextMenuComponent,
    UserTableHeaderComponent,
    MotivesHtmlPipe,
    CoachHeaderComponent,
    CoachFilterComponent,
    CoachingPageComponent,
    CoachingCompComponent,
    CoachingMainTabsComponent,
    CoachingSubTabsComponent,
    CoachMainPageComponent
  ],
  providers: [
    UserService,
    CoachServiceService
  ]
})
export class CoachRelationshipsModule { }
