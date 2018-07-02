import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { template, templateSettings } from 'lodash';
import { Alert } from '../../models/alert';
@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AlertMessageComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  alert: Alert;
  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    this.alert = {title: 'inbox_message_alert',
      messages: ['<a>Pre-Work</a>', '<a>Pre-Work</a>']
    };
    this.translateHelloTemplate();
  }

  public translateHelloTemplate(): void {
    this.alert.messages = this.alert.messages.map((message: string) => {
      message = this.replaceTranslationTemplate(
        this.translationService.translate('inbox_pre_work_due_hours'),
        { html: message }
      );
      return message;
    });
  }

  public replaceTranslationTemplate(translatedText: string, replacementObject: any): string {
    templateSettings.interpolate = /%{([\s\S]+?)}/g;
    const compiled = template(translatedText);
    return compiled(replacementObject);
  }
  onClose() {
    this.close.emit(false);
  }

  trackByIndex(index: number) {
    return index;
  }
}
