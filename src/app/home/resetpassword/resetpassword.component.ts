import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  onSubmitButtonClicked() {
    this.toastr.success(' New Password Set Sucessfully');
  }
  
}
