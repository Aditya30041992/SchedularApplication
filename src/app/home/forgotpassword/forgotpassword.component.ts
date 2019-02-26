import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  
  constructor(private router: Router,private toastr: ToastrService,
              private route: ActivatedRoute,private homeService: HomeService) { }
    
    ngOnInit() {
    }
    
    // email = new FormControl('', [ Validators.required, Validators.email ]);
    
    // getErrorMessage() {
    //   return this.email.hasError('required') ? 'You must enter a email' :
    //       this.email.hasError('email') ? 'Not a valid email' :
    
    //           '';
    // }
    
    // domainNameValidation = new FormControl('', [ Validators.required, Validators.email ]);
    
    // getdomainNameValidation() {
    //   return this.email.hasError('required') ? 'You must enter a email' :
    //       this.email.hasError('email') ? 'Not a valid email' :
    //           '';
    // }
    
    //only wite this
    
    // emailforlogin = new FormControl('',[ Validators.required,Validators.email ])
    // getErrorMessageForLogin() {
    //   return this.emailforlogin.hasError('required') ? 'You must enter a email' :
    //       this.emailforlogin.hasError('email') ? 'Not a valid email' :
    //       this.emailforlogin.hasError('pattern') ? 'Domain name must be bluzor.com or easternenterprise.com or ansh-system.com':
    //           '';
    // }
    
    onsubmitButtonClicked(){
      this.toastr.success('New  Password link is sent to your registered email id');
      
    }
    
  }
  