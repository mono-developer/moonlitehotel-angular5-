import { Component, OnInit } from '@angular/core';
import { Session } from '../class';

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.scss']
})
export class SessionTableComponent implements OnInit {
  sessions: Session[];

  constructor() { }

  ngOnInit() {
    this.sessions = [
      {id: '01', date: '2017-08-11T08:30:00-04:00', title: 'discover_sections_motives_display_name',
      description: 'Intro, ABC, Assess Motives Part 1', recording: '2:30:00'},
      {id: '02', date: '2017-10-01T10:30:00-04:00', title: 'discover_sections_conflict_display_name',
      description: 'Opposition vs. Conflict, Assess Motives, Team Management', recording: '2:30:00'},
      {id: '03', date: '2017-11-21T12:00:00-04:00', title: 'develop_strengths_styles',
      description: 'Bring the Right Strengths, Communicate in team', recording: '2:30:00'},
    ];
  }

  trackByIndex(index: number) {
    return index;
  }

}
