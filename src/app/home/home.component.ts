import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  emailforlogin = new FormControl('', [Validators.required, Validators.email]);
  user: firebase.User;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    public homeService: HomeService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLoggedInUser().subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

  onloginByEmailButtonClicked(email: string, password: string) {
    this.loginService.loginByEmail(email, password);
    this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
    this.toastr.success('Login sucessfully');
  }

  onloginButtonClicked() {
    this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
    this.toastr.success('Login sucessfully');
    this.loginService.login();
  }

  getErrorMessageForLogin() {
    return this.emailforlogin.hasError('required')
      ? 'You must enter a email'
      : this.emailforlogin.hasError('email')
        ? 'Not a valid email'
        : this.emailforlogin.hasError('pattern')
          ? 'Domain name must be bluzor.com or easternenterprise.com or ansh-system.com'
          : '';
  }

  onRegisterButtonClick(form: NgForm) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.signupUser(email, password);
    console.log(firstName, lastName, email, password);
    this.router.navigate(['/app/sign-in'], { relativeTo: this.route });
    this.toastr.success('Register sucessfully');
  }

  onClearButtonClicked() {
    this.homeService.signUp.reset();
    this.homeService.resetSignUpForm();
  }

  onForgotPasswordButtonClicked(email: string) {
    this.loginService.resetPasswordByForgot(email);
  }
  
}
