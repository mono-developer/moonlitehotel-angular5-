import { Component, OnInit, Input } from '@angular/core';
import { StrengthDownload } from '../../models/strength-download';

@Component({
  selector: 'app-strength-download',
  templateUrl: './strength-download.component.html',
  styleUrls: ['./strength-download.component.scss']
})
export class StrengthDownloadComponent implements OnInit {
  @Input('type') type: string = '360';
  @Input('downloads') downloads: StrengthDownload[];
  header: string;
  constructor() { }

  ngOnInit() {
    if (this.type === '360') {
      this.header = 'profile_strength_observed';
    } else {
      this.header = 'profile_strength_expected';
    }
  }

  trackByIndex(index: number) {
    return index;
  }

}
