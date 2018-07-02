import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizationModule } from 'angular-l10n';

import { FilterSearchbarModule } from '../shared/filter-searchbar/filter-searchbar.module';
import { PagingModule } from '../shared/paging/paging.module';

import { BadgeComponent } from './badge/badge.component';
import { InboxComponent } from './inbox.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { ReceivedSentComponent } from './received-sent/received-sent.component';
import { TabPageHeaderComponent } from './tab-page-header/tab-page-header.component';
import { ConnectionsSentComponent } from './connections-sent/connections-sent.component';
import { ConnectionsReceivedComponent } from './connections-received/connections-received.component';
import { InvitationsSentComponent } from './invitations-sent/invitations-sent.component';
import { InvitationsReceivedComponent } from './invitations-received/invitations-received.component';
import { FilterComponent } from './filter/filter.component';

import { UserService } from '../providers/user.service';

const routes: Routes = [
  {
      path     : '',
      component: InboxComponent,
      children : []
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
    BadgeComponent,
    InboxComponent,
    AlertMessageComponent,
    ReceivedSentComponent,
    TabPageHeaderComponent,
    ConnectionsSentComponent,
    ConnectionsReceivedComponent,
    InvitationsSentComponent,
    InvitationsReceivedComponent,
    FilterComponent
  ],
  providers: [
    UserService
  ]
})
export class InboxModule { }
