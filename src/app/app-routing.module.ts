import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/inbox/inbox.module#InboxModule'},
  {path: 'facilitators', loadChildren: 'app/facilitators/facilitators.module#FacilitatorsModule'},
  {path: 'download', loadChildren: 'app/download/download.module#DownloadModule'},
  {path: 'coach-relationships', loadChildren: 'app/coach-relationships/coach-relationships.module#CoachRelationshipsModule'},
  {path: 'develop-classes', loadChildren: 'app/develop-classes/develop-classes.module#DevelopClassesModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
