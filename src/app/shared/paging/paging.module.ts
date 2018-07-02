import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizationModule } from 'angular-l10n';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PagingComponent } from './paging.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizationModule,
    NgbModule
  ],
  declarations: [PagingComponent],
  exports: [PagingComponent]
})
export class PagingModule { }
