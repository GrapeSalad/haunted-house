import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-room',
  templateUrl: './left-room.component.html',
  styleUrls: ['./left-room.component.css']
})
export class LeftRoomComponent implements OnInit {

  doTheBack(){
    window.history.back();
  }

  constructor() { }

  ngOnInit() {
  }

}
