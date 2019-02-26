import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'application-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavList_Component implements OnInit {
  
  @Output() sidenavClose = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() {
  }
  
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  
}
