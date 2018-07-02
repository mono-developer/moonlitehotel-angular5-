import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/observable/ConnectableObservable';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent implements OnInit {
  @Output() closeAlert = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeAlert.emit();
  }

}
