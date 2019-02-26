import { Component, OnInit } from '@angular/core';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { Router, ActivatedRoute } from '@angular/router';
import { MeetingService } from 'src/app/services/meeting.service';
import { ToastrService } from 'ngx-toastr';
import { ValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomService } from 'src/app/services/room.service'

const portStartEnd: ValidatorFn = (fg: FormGroup) => {
  const start = fg.get('portStart').value;
  const end = fg.get('portEnd').value;
  
  return start && end && start < end ? null : { startEnd: true };
}


@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: ['./new-meeting.component.css']
})
export class NewMeetingComponent implements OnInit {
  
  // roomNames = [
  //   { id: 1, value: "Drenthe" },
  //   { id: 2, value: "Flevoland" },
  //   { id: 3, value: "Gelderland" }
  // ];
  
  
  constructor(private toastr: ToastrService,private router: Router,
              private route: ActivatedRoute,
              private apt: AmazingTimePickerService,
              private meetingService: MeetingService,
              private roomService: RoomService) { }
    
    memory: any = {};
    showSucessMessage: boolean;
    formControls = this.meetingService.form.controls;
    
    
    ngOnInit() {
      this.meetingService.getMeetings();
      //  this.meetingService.submitted = false; 
    }
  
    open(){
      const amazingTimePicker = this.apt.open();
      amazingTimePicker.afterClose().subscribe(timer =>{
        console.log(timer);
      });
    }

    onCreateButtonClicked()
    {
      if(this.meetingService.switchState == true){
        if(this.meetingService.form.valid){
          // if(this.meetingService.form.get('key').value == null)
          this.meetingService.insertMeeting(this.meetingService.form.value);
          console.log(this.meetingService.form.value);
          this.showSucessMessage = true;
          this.meetingService.form.reset();
          this.toastr.success('New Meeting Created Sucessfully');
          console.log(this.meetingService.apiURL);
          
        }
      }

      if(this.meetingService.switchState == false){
        if(this.meetingService.form.valid){
          // if(this.meetingService.form.get('key').value == null)
          this.meetingService.updateMeeting(this.meetingService.form.value);
          this.showSucessMessage = true;
          this.meetingService.form.reset();
          this.toastr.success('Meeting Updated Sucessfully');  
        } 
      }
      this.router.navigate(['/meeting/meetings'], { relativeTo: this.route })
      this.meetingService.intializeMeetingFormGroup();
      
    }
    
    
    onClearButtonClicked(){
      this.meetingService.form.reset();
      this.meetingService.intializeMeetingFormGroup();
      
    }
    
    onBackbuttonClicked(){
      this.router.navigate(['/meeting/meetings'], { relativeTo: this.route })
      
    }
    
  }
  