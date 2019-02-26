import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidatorFn, FormGroup } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service';
import { HttpService } from 'src/app/services/http.service';

const portStartEnd: ValidatorFn = (fg: FormGroup) => {
  const start = fg.get('portStart').value;
  const end = fg.get('portEnd').value;

  return start && end && start < end ? null : { startEnd: true };
};

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})

export class NewMeetingComponent implements OnInit {
  memory: any = {};
  showSucessMessage: boolean;
  minEnd;


  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private apt: AmazingTimePickerService,
    private roomService: RoomService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getFirebaseMeetings();


  }

  intializeMeetingFormGroup() {
    this.httpService.form.setValue({
      $key: null,
      meetingName: '',
      organiserName: '',
      agenda: '',
      attendeeList: '',
      // date:'',
      startTime: '',
      endTime: '',
      roomName: 'none'
    });
  }

  open() {
    const amazingTimePicker = this.apt.open();
    amazingTimePicker.afterClose().subscribe((timer) => {
      console.log(timer);
    });
  }


  onCreateButtonClicked() {
    if (this.httpService.switchState == true) {
      if (this.httpService.form.valid) {
        this.httpService.insertFirebaseMeeting(this.httpService.form.value);
        console.log(this.httpService.form.value);
        this.showSucessMessage = true;
        this.httpService.form.reset();
        this.toastr.success('New Meeting Created Sucessfully');
      }
    }

    if (this.httpService.switchState == false) {
      if (this.httpService.form.valid) {
        this.httpService.updateFirebaseMeeting(this.httpService.form.value);
        this.showSucessMessage = true;
        this.httpService.form.reset();
        this.toastr.success('Meeting Updated Sucessfully');
      }
    }
    this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
    this.intializeMeetingFormGroup();
  }

  onClearButtonClicked() {
    this.httpService.form.reset();
    this.intializeMeetingFormGroup();
  }

  onBackbuttonClicked() {
    this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
  }

}
