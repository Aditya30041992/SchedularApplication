import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  
  
  @Output() public sidenavToggle = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit('');
  }
  
}
