// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ValidatorFn,FormBuilder,FormGroup, FormControl,Validators } from "@angular/forms"; 
// import { Router, ActivatedRoute } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class MeetingService {

//   constructor(private router: Router,
//     private route: ActivatedRoute){}

//   form: FormGroup = new FormGroup({
//       $key: new FormControl(null),
//       meetingName: new FormControl('',Validators.required),
//       organiserName: new FormControl('',Validators.required),
//       agenda: new FormControl('',[Validators.required, Validators.minLength(15)]),
//       attendeeList: new FormControl('',Validators.required),
//       date: new FormControl('',[Validators.required]),
//       startTime: new FormControl('',[Validators.required]),
//       endTime: new FormControl('',[Validators.required]),
//       roomName:new FormControl('',Validators.required)
//   });

//   intializeMeetingFormGroup(){
//     this.form.setValue({
//       $key: null,
//       meetingName: '',
//       organiserName: '',
//       agenda: '',
//       attendeeList: '',
//       date: '',
//       startTime: '',
//       endTime: '',
//       roomName:'none'

//     });

//   }

// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidatorFn,FormBuilder,FormGroup, FormControl,Validators } from "@angular/forms"; 
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Meeting } from 'src/app/models/meeting'
import { MeetingDeatilsComponent } from '../meeting/meeting-details/meeting-details.component';
import { MatDialog, MatDialogConfig, MatSort, MatPaginator } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  apiURL: string = 'https://training-4ae7a.firebaseio.com/';
  private meeting:Meeting
  
  constructor(private firebase: AngularFireDatabase,private router: Router,
              private route: ActivatedRoute,private httpClient: HttpClient,
              private matDialog: MatDialog,)
              {
                 this.meeting = new Meeting();//meetingName,organiserName,agenda,attendeeList,startTime,endTime,roomName
               }
    
    meetingList: AngularFireList<Meeting>;
    meetingDetails: AngularFireList<Meeting>;
    switchState: boolean;
    
    
    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      meetingName: new FormControl('',Validators.required),
      organiserName: new FormControl('',Validators.required),
      agenda: new FormControl('',[Validators.required, Validators.minLength(15)]),
      attendeeList: new FormControl('',Validators.required),
      // date: new FormControl('date',[Validators.required]),
      startTime: new FormControl('',[Validators.required]),
      endTime: new FormControl('',[Validators.required]),
      roomName:new FormControl('',Validators.required)
    });
    
    ngOnInit() {
    }

    intializeMeetingFormGroup(){
      this.form.setValue({
        $key: null,
        meetingName: '',
        organiserName: '',
        agenda: '',
        attendeeList: '',
        //date:'',
        startTime: '',
        endTime: '',
        roomName:'none'
      });
    }
    
    public createMeeting(meeting: Meeting){}
    
    public updateMeetings(meeting: Meeting){}
    
    public deleteMeetings($key: string){}
    
    public getMeetingById($key: string){}
    
    public getMeetingss(url?: string){}
    
    getMeetings(){
      this.meetingList = this.firebase.list('meetings');
      console.log(this.meetingList);
      return this.meetingList.snapshotChanges();
      
    }
    
    getMeeting(){
      this.meetingDetails = this.firebase.list('meetings');
      console.log(this.meetingDetails);
      return this.meetingDetails.snapshotChanges();
    }
    
    insertMeeting(meeting){
      this.switchState = true;
      this.meetingList.push({
        //$key: meeting.$key,
        meetingName: meeting.meetingName,
        organiserName: meeting.organiserName,
        agenda: meeting.agenda,
        attendeeList: meeting.attendeeList,
        // date: meeting.date.toString(),
        startTime: meeting.startTime,
        endTime: meeting.endTime,
        roomName: meeting.roomName
        
        
      });
      console.log(meeting);
      console.log(meeting);
      return this.httpClient.post(`${this.apiURL}/meetings/`,meeting);
      
    }
    
    updateMeeting(meeting){
      // this.submitted = false;
      this.meetingList.update(meeting.$key,
        {
          //$key: meeting.$key,
          meetingName: meeting.meetingName,
          organiserName: meeting.organiserName,
          agenda: meeting.agenda,
          attendeeList: meeting.attendeeList,
          //date: meeting.date.toString(),
          startTime: meeting.startTime,
          endTime: meeting.endTime,
          roomName: meeting.roomName
          
        });
        console.log(this.meetingList);
        console.log(meeting);
        console.log(meeting.$key);
        return this.httpClient.post(`${this.apiURL}/meetings/`,meeting);
        
        
      }
      
      deleteMeeting($key: string){
        console.log(this.meetingList);
        this.meetingList.remove($key);
        console.log(this.meetingList);
        console.log($key);
        // console.log(this.meeting.$key);
        return this.httpClient.delete(`${this.apiURL}/mettings/${$key}`);
        
      }
      // detailsOfMeeting($key:string){
      //   this.meetingDetails.
      // }
      populateForm(meeting){
        this.switchState = false;
        this.form.setValue(meeting);
        console.log(this.meetingList);
        console.log(meeting);
        console.log(meeting.$key);
        this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });
        return this.httpClient.get(`${this.apiURL}/meetings/`,meeting);
        
        
      }
  }