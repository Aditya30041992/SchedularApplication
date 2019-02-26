import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'application-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header_Component implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  
  
}
