import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alphabet-nav',
  templateUrl: './alphabet-nav.component.html',
  styleUrls: ['./alphabet-nav.component.scss']
})
export class AlphabetNavComponent implements OnInit {
  @Output() clickItem = new EventEmitter<string>();
  alphaBetList: string[] = [];

  constructor() { }

  ngOnInit() {
    this.alphaBetList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  onClickLetter(item: string) {
    this.clickItem.emit(item);
  }

  trackByIndex(index: number) {
    return index;
  }

}
