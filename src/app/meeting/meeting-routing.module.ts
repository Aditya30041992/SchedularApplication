import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MeetingListComponent } from './meeting-list/meeting-list.component';
import { NewMeetingComponent } from './new-meeting/new-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { MeetingDeatilsComponent } from './meeting-details/meeting-details.component';

const routes: Routes = [
  { path: 'meetings', component:MeetingListComponent  },
  { path:'new-meetings', component:NewMeetingComponent},
  { path: 'edit-meetings', component:EditMeetingComponent  },
  { path:'meetings-details', component:MeetingDeatilsComponent}
  
];

@NgModule({
  
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ],
  exports: [
    RouterModule
  ]
})
export class MeetingRoutingModule { }