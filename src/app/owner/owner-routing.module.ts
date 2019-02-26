import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OwnerListComponent } from 'src/app/owner/owner-list/owner-list.component';

const routes: Routes = [{ path: 'trainings-list', component: OwnerListComponent }];

@NgModule({
	declarations: [],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class OwnerRoutingModule { }
