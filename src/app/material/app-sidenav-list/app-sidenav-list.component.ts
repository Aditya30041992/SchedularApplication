import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-app-sidenav-list',
  templateUrl: './app-sidenav-list.component.html',
  styleUrls: ['./app-sidenav-list.component.css']
})
export class AppSidenavListComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onSidenavClose = () => {
    this.sidenavClose.emit('');
  }

}
