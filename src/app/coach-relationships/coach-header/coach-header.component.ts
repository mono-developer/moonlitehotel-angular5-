import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coach-header',
  templateUrl: './coach-header.component.html',
  styleUrls: ['./coach-header.component.scss']
})
export class CoachHeaderComponent implements OnInit {
  @Input('title') title: string;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  gotoBack() {
    this.location.back();
  }

}
