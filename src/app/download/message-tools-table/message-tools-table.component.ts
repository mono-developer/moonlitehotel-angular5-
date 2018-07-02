import { Component, OnInit, Input } from '@angular/core';
import { MessageTool } from '../../models/message-tool';

@Component({
  selector: 'app-message-tools-table',
  templateUrl: './message-tools-table.component.html',
  styleUrls: ['./message-tools-table.component.scss']
})
export class MessageToolsTableComponent implements OnInit {
  @Input('downloads') downloads: MessageTool[];

  constructor() { }

  ngOnInit() {
  }
  trackByIndex(index: number) {
    return index;
  }

}
