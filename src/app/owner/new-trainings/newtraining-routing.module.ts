import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTrainingComponent } from './new-training/new-training.component';

const routes: Routes = [
  { path: 'new-trainings', component: NewTrainingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NewtrainingRoutingModule { }
