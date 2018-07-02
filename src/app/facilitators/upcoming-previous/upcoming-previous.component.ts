import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Language } from 'angular-l10n';
import { Facilitator } from '../../models/facilitator';

@Component({
  selector: 'app-upcoming-previous',
  templateUrl: './upcoming-previous.component.html',
  styleUrls: ['./upcoming-previous.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UpcomingPreviousComponent implements OnInit {
  @Language() lang: string;
  @Input('facilitator') facilitator: Facilitator;
  constructor() { }

  ngOnInit() {
  }

}
