import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'
import { ForgotpasswordComponent } from './home/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './home/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'app/sign-in', component: HomeComponent},
  { path: 'home/forgotpassword', component: ForgotpasswordComponent },
  { path: 'home/forgotpassword/resetpassword' , component: ResetpasswordComponent },
  { path: 'owner', loadChildren: "src/app/owner/owner.module#OwnerModule" },
  { path: 'meeting', loadChildren: "src/app/meeting/meeting.module#MeetingModule"},
  { path: 'new-training', loadChildren: "src/app/owner/new-trainings/new-training.module#NewTrainingsModule"},
  { path: 'traning-detail', loadChildren: "src/app/owner/training-details/training-details.module#TrainingDetailsModule"},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    
    exports: [RouterModule],
    
    declarations: []
    
  })
  export class AppRoutingModule {}
  