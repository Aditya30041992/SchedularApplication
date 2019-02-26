import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TrainingDetailsComponent } from '../training-details/training-details/training-details.component';
import { ToastrService } from 'ngx-toastr';
import { NewTrainingComponent } from 'src/app/owner/new-trainings/new-training/new-training.component';
import { Training } from 'src/app/models/training';
import { HttpService } from 'src/app/services/http.service';

@Component({
	selector: 'app-owner-list',
	templateUrl: './owner-list.component.html',
	styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

	trainingsArray = [];
	value;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private toastr: ToastrService,
		private httpService: HttpService
	) { }

	ngOnInit() {
		this.httpService.getFirebaseTrainings().subscribe((list) => {
			this.trainingsArray = list.map((item) => {
				return {
					$key: item.key,
					...item.payload.val()
				};
			});
		});
	}

	onNewButtonClicked() {
		this.httpService.switchTrainingState = true;
		this.router.navigate(['/new-training/new-trainings'], { relativeTo: this.route });
		console.log(this.httpService.switchTrainingState);
	}

	onEditButtonClicked(training) {
		console.log(training);
		this.httpService.switchTrainingState = false;
		this.httpService.PopulateForm(training);
	}

	onRegisterButtonClicked() {
		this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
		this.toastr.success('Training Registered Sucessfully');

	}

	onDetailsButtonClicked(training) {
		this.httpService.PopulateForm(training);
		this.router.navigate(['/traning-detail/training/id'], { relativeTo: this.route });
	}

	onDeleteButtonClicked($key) {
		if (confirm('Are You sure to delete this record ?')) {
			this.httpService.deleteFirebaseTraining($key);
			this.toastr.success('Training Deleted Sucessfully');
		}
	}

}
