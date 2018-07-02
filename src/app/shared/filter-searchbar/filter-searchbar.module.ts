import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalizationModule } from 'angular-l10n';
import { FilterSearchbarComponent } from './filter-searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LocalizationModule
  ],
  declarations: [FilterSearchbarComponent],
  exports: [FilterSearchbarComponent]
})
export class FilterSearchbarModule { }
