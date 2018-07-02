import { Component, OnInit, Input } from '@angular/core';
import { MeetingTool } from '../../models/meeting-tool';

@Component({
  selector: 'app-meeting-tools-table',
  templateUrl: './meeting-tools-table.component.html',
  styleUrls: ['./meeting-tools-table.component.scss']
})
export class MeetingToolsTableComponent implements OnInit {
  @Input('downloads') downloads: MeetingTool[];

  constructor() { }

  ngOnInit() {
  }

  trackByIndex(index: number) {
    return index;
  }

}
