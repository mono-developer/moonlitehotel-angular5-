import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach-main-page',
  templateUrl: './coach-main-page.component.html',
  styleUrls: ['./coach-main-page.component.scss']
})
export class CoachMainPageComponent implements OnInit {
  userRole: string = 'org_admin';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // if user is 'coach', please use 'coach'
    // default value is 'org_admin'
    this.userRole = this.route.snapshot.paramMap.get('org');
  }

}
