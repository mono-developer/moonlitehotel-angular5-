import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gray-header',
  templateUrl: './gray-header.component.html',
  styleUrls: ['./gray-header.component.scss']
})
export class GrayHeaderComponent implements OnInit {
  @Input('title') title: string = '';
  constructor() { }

  ngOnInit() {
  }

}
