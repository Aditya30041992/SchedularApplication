import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MeetingListComponent } from 'src/app/meeting/meeting-list/meeting-list.component';
import { NewMeetingComponent } from 'src/app/meeting/new-meeting/new-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { MeetingDeatilsComponent } from 'src/app/meeting/meeting-details/meeting-details.component'
import { MeetingService } from 'src/app/services/meeting.service';
import { RoomService } from 'src/app/services/room.service'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    MeetingListComponent,
    NewMeetingComponent,
    EditMeetingComponent,
    MeetingDeatilsComponent
  ],
  imports: [
    CommonModule,
    MeetingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AmazingTimePickerModule,
    NgxMaterialTimepickerModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers:[MeetingService,RoomService],
  // entryComponents:[MeetingDeatilsComponent]
})
export class MeetingModule { }






