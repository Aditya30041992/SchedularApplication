import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDeatilsComponent implements OnInit {

  perticularMeeting;
  oneArray = [];

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.perticularMeeting = this.httpService.returnPerticularMeetingDetails().value
  }

  ngOnInit() {
    this.httpService.getFirebaseMeetings().subscribe((list) => {
      this.oneArray = list.map((item) => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

  onRegisterButtonClicked() {
    this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
    this.toastr.success('Register sucessfully');
  }

  onBackButtonClicked() {
    this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
  }

}
