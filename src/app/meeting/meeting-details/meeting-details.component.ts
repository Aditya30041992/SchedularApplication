import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { MeetingService } from 'src/app/services/meeting.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDeatilsComponent implements OnInit {
  
  perticularMeeting;
  oneArray =[];
  // onevarrable;
  constructor( private toastr: ToastrService,private router: Router,
    private route: ActivatedRoute,
    private meetingService: MeetingService,
   // private dialogRef: MatDialogRef<MeetingDeatilsComponent>
   ) { }
    
    
    ngOnInit() {
      this.meetingService.getMeeting().subscribe(
        list => {
          this.oneArray = list.map(item =>{
            return{
              $key: item.key,
              ...item.payload.val()
            };
          });
        });
      // this.meetingService.getMeeting(this.onevarrable).subscribe(
      //   one => {
      //     this.oneArray = one.map(item => {
      //       return{
      //         $key: item.key,
      //         ...item.payload.val()
      //       };
      //     });
      //   });
    }
    
    // onRegisterButtonClicked(){
    //   this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
    //   this.dialogRef.close();
    //   this.toastr.success('Register sucessfully');
    
    // }
    
    onBackButtonClicked(){
      this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
      //this.dialogRef.close();
      
    }
  }
  