import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { template, templateSettings } from 'lodash';
import { Work } from '../class';

@Component({
  selector: 'app-class-work',
  templateUrl: './class-work.component.html',
  styleUrls: ['./class-work.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassWorkComponent implements OnInit, AfterViewInit {
  @Input('work') work: Work;
  @Output() clickItem = new EventEmitter();
  @Output() clickActive = new EventEmitter<string>();
  constructor(public translationService: TranslationService, private elementRef: ElementRef) { }

  ngOnInit() {
    this.translateTemplate();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('.active-item')
                                  .addEventListener('click', this.onClickActive.bind(this));
  }

  public translateTemplate(): void {
    this.work.content2 = this.replaceTranslationTemplate(
      this.translationService.translate(this.work.content2),
      { html: this.work.active }
    );
  }

  public replaceTranslationTemplate(translatedText: string, replacementObject: any): string {
    templateSettings.interpolate = /%{([\s\S]+?)}/g;
    const compiled = template(translatedText);
    return compiled(replacementObject);
  }
  onClick() {
    this.clickItem.emit();
  }

  onClickActive(ev: any) {
    this.clickActive.emit(ev.srcElement.innerHTML);
  }

}
