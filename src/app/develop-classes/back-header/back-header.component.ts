import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-header',
  templateUrl: './back-header.component.html',
  styleUrls: ['./back-header.component.scss']
})
export class BackHeaderComponent implements OnInit {
  @Input('title') title: string;

  constructor(private location: Location) { }

  ngOnInit() {
  }

  gotoBack() {
    this.location.back();
  }

}
