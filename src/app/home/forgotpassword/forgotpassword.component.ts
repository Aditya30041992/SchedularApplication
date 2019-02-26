import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})

export class ForgotpasswordComponent implements OnInit {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public homeService: HomeService
  ) { }

  ngOnInit() { }

  onsubmitButtonClicked() {
    this.toastr.success('New  Password link is sent to your registered email id');
  }
  
}
