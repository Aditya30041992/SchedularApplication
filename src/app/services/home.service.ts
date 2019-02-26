import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl,Validators } from "@angular/forms"; 
@Injectable({
    providedIn: 'root'
})
export class HomeService {
    
    constructor(private http: HttpClient) { }
    
    signUp: FormGroup = new FormGroup({
        $key: new FormControl(null),
        firstName: new FormControl('',Validators.required),
        lastName: new FormControl('',Validators.required),
        email: new FormControl('',[Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(bluzor||easternenterprise||ansh-system)\.com$/)]),
        password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(15)]),
        confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(15)])
    });
    
    signIn: FormGroup = new FormGroup({
        // $key: new FormControl(null),
        email: new FormControl('',[Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(bluzor||easternenterprise||ansh-system)\.com$/)]),
        password: new FormControl('',[Validators.required, Validators.minLength(6),Validators.maxLength(15)])
        
        
    });
    forgotPassword: FormGroup = new FormGroup({
        // $key: new FormControl(null),
        email: new FormControl('',[Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(bluzor||easternenterprise||ansh-system)\.com$/)])
        
    });
    
    resetSignUpForm(){
        this.signUp.setValue({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword:''
        })
    }
    
}



