import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor() { }

 ngOnInit(): void {
  }
  
  enterSearchValue : string = '';
  
  @Output() searchTextChanged : EventEmitter<string> = new EventEmitter<string>();
  

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enterSearchValue)
  }
}
