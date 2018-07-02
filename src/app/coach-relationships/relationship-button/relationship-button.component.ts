import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relationship-button',
  templateUrl: './relationship-button.component.html',
  styleUrls: ['./relationship-button.component.scss']
})
export class RelationshipButtonComponent implements OnInit {
  @Input('org') org: string;
  constructor() { }

  ngOnInit() {
  }

}
