import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/services/http.service';

@Component({
	selector: 'app-training-details',
	templateUrl: './training-details.component.html',
	styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {

	oneArray = [];
	perticularTraining;

	constructor(
		private toastr: ToastrService,
		private router: Router,
		private route: ActivatedRoute,
		private httpService: HttpService
	) {
		this.perticularTraining = this.httpService.returnPerticularTrainingDetails().value;
		console.log(this.perticularTraining);
	}

	ngOnInit() {
		this.httpService.getFirebaseTrainings().subscribe((list) => {
			this.oneArray = list.map((item) => {
				return {
					$key: item.key,
					...item.payload.val()
				};
			});
		});
	}

	onRegisterButtonClicked() {
		this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
		this.toastr.success('Register sucessfully');
	}

	onBackButtonClicked() {
		this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
	}

}
