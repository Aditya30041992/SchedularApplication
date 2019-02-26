import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { MaterialModule } from './../material/material.module';
import { TrainingDetailsModule } from './training-details/training-details.module';
import { Header_Component } from 'src/app/owner/owner-list/navigation/header/header.component';
import { SidenavList_Component } from 'src/app/owner/owner-list/navigation/sidenav-list/sidenav-list.component'
import { Layout_Component } from 'src/app/owner/owner-list/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrainingService } from 'src/app/services/training.service';
import { RoomService } from 'src/app/services/room.service'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    OwnerListComponent,
    Header_Component,
    SidenavList_Component,
    Layout_Component
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MaterialModule,
    FormsModule,
    TrainingDetailsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  exports: [
    Header_Component,
    SidenavList_Component,
    Layout_Component,
    OwnerListComponent
    
  ],
  providers:[TrainingService,RoomService]
})
export class OwnerModule { }
