import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingDetailsComponent } from './training-details/training-details.component';
import { TrainingDetailsRoutingModule } from 'src/app/owner/training-details/training-details-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [TrainingDetailsComponent],
	imports: [
		CommonModule,
		MaterialModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		TrainingDetailsRoutingModule
	]
})
export class TrainingDetailsModule { }
