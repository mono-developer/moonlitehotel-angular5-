import { Component, OnInit } from '@angular/core';
import { Language, TranslationService } from 'angular-l10n';
import { template, templateSettings } from 'lodash';

import { StrengthDownload } from '../models/strength-download';
import { MeetingTool } from '../models/meeting-tool';
import { MessageTool } from '../models/message-tool';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  description: string;
  downloads360: StrengthDownload[];
  downloadsRole: StrengthDownload[];
  meetingTools: MeetingTool[];
  messageTools: MessageTool[];

  constructor(public translationService: TranslationService) { }

  ngOnInit() {
    this.description = `<a>Profile</a>`;
    this.translateHelloTemplate();
    this.downloads360 = [
      {
        type: '360', provider: 'Mark Logan', date: '2017-04-18T00:00:00-06:00', strengths: [
          'navigation_strengths_inclusive', 'navigation_strengths_flexible', 'navigation_strengths_risk_taking'
        ]
      },
      {
        type: '360', provider: 'Janice lee', date: '2016-01-07T00:00:00-06:00', strengths: [
          'navigation_strengths_inclusive', 'navigation_strengths_caring', 'navigation_strengths_sociable'
        ]
      },
      {
        type: '360', provider: 'Amy Chang', date: '2014-06-22T00:00:00-06:00', strengths: [
          'navigation_strengths_caring', 'navigation_strengths_inclusive', 'navigation_strengths_flexible'
        ]
      }
    ];
    this.downloadsRole = [
      {
        type: 'role', provider: 'Mark Logan', date: '2017-04-18T00:00:00-06:00', strengths: [
          'navigation_strengths_inclusive', 'navigation_strengths_flexible', 'navigation_strengths_risk_taking'
        ]
      },
      {
        type: 'role', provider: 'Janice lee', date: '2016-01-07T00:00:00-06:00', strengths: [
          'navigation_strengths_inclusive', 'navigation_strengths_caring', 'navigation_strengths_sociable'
        ]
      },
      {
        type: 'role', provider: 'Amy Chang', date: '2014-06-22T00:00:00-06:00', strengths: [
          'navigation_strengths_caring', 'navigation_strengths_inclusive', 'navigation_strengths_flexible'
        ]
      }
    ];

    this.meetingTools = [{type: 'common_text_monument'}, {type: 'common_text_name_tent'}, {type: 'common_text_name_badge'}];

    this.messageTools = [
      {description: 'profile_text_email_signature', imgUrl: 'assets/icons/triangle.svg', example: 'example'},
      {description: 'profile_text_outlook_addin', imgUrl: 'assets/icons/outlook.svg'},
      {description: 'profile_text_skype', imgUrl: 'assets/icons/skype.svg'},
      {description: 'profile_text_slack', imgUrl: 'assets/icons/slack.svg'},
      {description: 'profile_text_microsoft', imgUrl: 'assets/icons/microsoft_teams_logo.svg'}
    ];
  }

  translateHelloTemplate() {
    this.description = this.replaceTranslationTemplate(
      this.translationService.translate('develop_your_downloads_description2'),
      { html: this.description }
    );
  }

  public replaceTranslationTemplate(translatedText: string, replacementObject: any): string {
    templateSettings.interpolate = /%{([\s\S]+?)}/g;
    const compiled = template(translatedText);
    return compiled(replacementObject);
  }

}
