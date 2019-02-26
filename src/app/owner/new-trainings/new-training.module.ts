import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTrainingComponent } from './new-training/new-training.component';
import { NewtrainingRoutingModule } from 'src/app/owner/new-trainings/newtraining-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { RoomService } from 'src/app/services/room.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [NewTrainingComponent],
  imports: [
    CommonModule,
    NewtrainingRoutingModule,
    MaterialModule,
    AmazingTimePickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  exports: [NewTrainingComponent],
  providers: [RoomService]
})
export class NewTrainingsModule { }
