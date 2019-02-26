import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDetailsComponent } from './training-details/training-details.component';

const routes: Routes = [{ path: 'training/id', component: TrainingDetailsComponent }];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class TrainingDetailsRoutingModule { }
