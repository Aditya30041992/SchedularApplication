import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { User } from 'firebase';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit {

  user: User;

  constructor(private angularfireAuth: AngularFireAuth) {
    this.angularfireAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  ngOnInit() { }


  login() {
    console.log('login with google');
    this.angularfireAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  getLoggedInUser() {
    return this.angularfireAuth.authState;
  }


  async logout() {
    await this.angularfireAuth.auth.signOut();
    localStorage.removeItem('user');
  }

  signupUser(email: string, password: string) {
    this.angularfireAuth.auth.createUserWithEmailAndPassword(email, password).catch((error) => console.log(error));
    this.sendEmailVerification();

  }

  async loginByEmail(email: string, password: string) {
  }

  async sendEmailVerification() {
    await this.angularfireAuth.auth.currentUser.sendEmailVerification()
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.angularfireAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  resetPasswordByForgot(email: string) {
    let auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
  
}
