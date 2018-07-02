import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalizationModule } from 'angular-l10n';
import { CertRibbonComponent } from './cert-ribbon.component';

@NgModule({
  imports: [
    CommonModule,
    LocalizationModule
  ],
  declarations: [CertRibbonComponent],
  exports: [CertRibbonComponent]
})
export class CertRibbonModule { }
