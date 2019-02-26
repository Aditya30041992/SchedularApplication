import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Meeting } from 'src/app/models/meeting';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  array = [];
  selectedMeeting: Meeting;
  meetings:Meeting[];

  value;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private http: HttpClient,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getFirebaseMeetings().subscribe((list) => {
      this.array = list.map((item) => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
    });

    this.getMeetings();
  }

  getMeetings(): void {
    this.httpService.getMeetings()
    .subscribe(meetings => this.meetings = meetings);
   }

  onNewMeetingButtonClicked() {
    this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });
    this.httpService.switchState = true;
    this.httpService.changeName = 'New-Meeting';
    this.httpService.changeButtonName = 'Create';
  }

  onEditButtonClicked() {
    this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });
  }

  onDetailsButtonClicked(meeting: Meeting): void {
    this.httpService.populateForm(meeting);
    this.selectedMeeting = meeting;
    this.router.navigate(['/meeting/meetings-details'], { relativeTo: this.route });
  }
  onDeleteButtonClicked($key,meeting) {
    if (confirm('Are You sure to delete this record ?')) {
      this.httpService.deleteFirebaseMeeting($key);
      this.toastr.success('Meeting Deleted Sucessfully');
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
