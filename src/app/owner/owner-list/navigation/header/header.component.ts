import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from 'src/app/home/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'application-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class Header_Component implements OnInit {

  user: firebase.User;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private loginService: LoginService,
    private angularfireAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginService.getLoggedInUser().subscribe((user) => {
      this.user = user;
    });
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };

  onloggedOutButtonClicked() {
    this.loginService.logout();
    this.router.navigate(['/home'], { relativeTo: this.route });
  }

}
