import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, MatSort, MatPaginator } from '@angular/material';
import { MeetingDeatilsComponent } from '../meeting-details/meeting-details.component';
import { MeetingService } from 'src/app/services/meeting.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {
  
  @Output() public sidenavToggle = new EventEmitter();
  array= [];
  value;
  constructor(  private router: Router,
    private route: ActivatedRoute,
   // private matDialog: MatDialog,
    private toastr: ToastrService,
    private meetingService: MeetingService) { }
    
    // meetingListData: MatTableDataSource<any>;  // this is mat-table code
    // displayColumndata: string[] = ['Meeting Name', 'Organiser Name', 'Start Time', 'End Time', 'Room Name', 'Actions'] ;
    // @ViewChild(MatSort) sort: MatSort;
    // @ViewChild(MatPaginator) paginator: MatPaginator;
    // searchKey: string;     this is mat-table code
    
    ngOnInit() {
      this.meetingService.getMeetings().subscribe(
        list => {
          //let array = list.map(item =>{ // mat-table code
          this.array = list.map(item => {
            return{
              $key: item.key,
              ...item.payload.val()
            };
          });
          
          // this.meetingListData = new MatTableDataSource(array);  // this is mat-table code
          // this.meetingListData.sort = this.sort;
          // this.meetingListData.paginator = this.paginator; // this is mat-table code
          
        });
      }
      
      // onSearchClear(){      // this is mat-table code
      //   this.searchKey = "";
      //   this.applyFilter();
      // }
      // applyFilter(){
      //   this.meetingListData.filter = this.searchKey.trim().toLowerCase();    //  this is mat-table code
      // }
      
      onNewMeetingButtonClicked(){
        this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });
        this.meetingService.switchState = true; 
      }

      onEditButtonClicked(){
        // this.router.navigate(['/meeting/edit-meetings'], { relativeTo: this.route })
        this.router.navigate(['/meeting/new-meetings'], { relativeTo: this.route });
      }

      // onDetailsButtonClicked(){
      //   //this.router.navigate(['/meeting/meetings-details'], { relativeTo: this.route });
      //   const matDialogConfig = new MatDialogConfig();
      //   matDialogConfig.disableClose = true;
      //   matDialogConfig.autoFocus = true;
      //   matDialogConfig.width = "60%"
      //   this.matDialog.open(MeetingDeatilsComponent,matDialogConfig);
      //   console.log(this.meetingService.getMeeting('value'));
      // } 
      onDetailsButtonClicked()
      {
        this.router.navigate(['/meeting/meetings-details'], { relativeTo: this.route });
        //this.meetingService.getMeeting();
      }
      onDeleteButtonClicked($key){
        if(confirm('Are You sure to delete this record ?')){
          this.meetingService.deleteMeeting($key);
          this.toastr.success('Meeting Deleted Sucessfully');
          
        }
      }
      
      public onToggleSidenav = () => {
        this.sidenavToggle.emit();
      }
      
    }
    