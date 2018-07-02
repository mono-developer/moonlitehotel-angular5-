import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab-page-header',
  templateUrl: './tab-page-header.component.html',
  styleUrls: ['./tab-page-header.component.scss']
})
export class TabPageHeaderComponent implements OnInit {
  @Input('state') state: number = 0;
  title: string;
  description: string;
  headerContents = [
    {title: 'inbox_invitations_received', description: 'inbox_invitations_received_description'},
    {title: 'inbox_connection_requests_received', description: 'inbox_connection_requests_received_description'},
    {title: 'inbox_invitations_sent', description: 'inbox_invitations_sent_description'},
    {title: 'inbox_connection_requests_sent', description: 'inbox_connection_requests_sent_description'}
  ];

  constructor() { }

  ngOnInit() {
    this.title = this.headerContents[this.state].title;
    this.description = this.headerContents[this.state].description;
  }

}
