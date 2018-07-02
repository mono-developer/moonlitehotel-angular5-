import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizationModule } from 'angular-l10n';
import { DownloadComponent } from './download.component';
import { GrayHeaderComponent } from './gray-header/gray-header.component';
import { SdiTableComponent } from './sdi-table/sdi-table.component';
import { StrengthDownloadComponent } from './strength-download/strength-download.component';
import { MeetingToolsTableComponent } from './meeting-tools-table/meeting-tools-table.component';
import { MessageToolsTableComponent } from './message-tools-table/message-tools-table.component';
import { ConversationToolsTableComponent } from './conversation-tools-table/conversation-tools-table.component';

import { ConflictPipe } from '../pipes/conflict.pipe';
import { MotivesHtmlPipe } from '../pipes/motives-html.pipe';

const routes: Routes = [
  {
      path     : '',
      component: DownloadComponent,
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
    RouterModule.forChild(routes)
  ],
  declarations: [
    DownloadComponent,
    GrayHeaderComponent,
    SdiTableComponent,
    StrengthDownloadComponent,
    MeetingToolsTableComponent,
    MessageToolsTableComponent,
    ConversationToolsTableComponent,
    ConflictPipe,
    MotivesHtmlPipe
  ],
  providers: [
  ]
})
export class DownloadModule { }
