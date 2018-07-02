import { Component, OnInit } from '@angular/core';
import { ConversationTool } from '../../models/conversation-tool';

@Component({
  selector: 'app-conversation-tools-table',
  templateUrl: './conversation-tools-table.component.html',
  styleUrls: ['./conversation-tools-table.component.scss']
})
export class ConversationToolsTableComponent implements OnInit {
  tool: ConversationTool;

  constructor() { }

  ngOnInit() {
    this.tool = {description: 'profile_text_mobile_app'};
  }

}
