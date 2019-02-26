import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './home/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: firebase.User;
  constructor(private angularfireAuth: AngularFireAuth, private loginService: LoginService) { }

  ngOnInit() {
    this.angularfireAuth.authState.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }
}
