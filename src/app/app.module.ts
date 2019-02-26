import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need
import { ToastrModule } from 'ngx-toastr';
import { MeetingModule } from './meeting/meeting.module';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';
import { ConfirmPasswaordValidatorDirective } from 'src/app/shared/confirm-password-validator.directive';
import { RepositoryService } from 'src/app/shared/repository.service';
import { RoomService } from 'src/app/services/room.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeService } from './services/home.service';
import { LoginService } from './home/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ConfirmPasswaordValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule.forRoot(),
    AmazingTimePickerModule,
    MeetingModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [RepositoryService, HomeService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
