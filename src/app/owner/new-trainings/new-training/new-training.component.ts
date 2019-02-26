import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/room.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  public training;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private apt: AmazingTimePickerService,
    private roomService: RoomService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.httpService.getFirebaseTrainings();
  }

  intializeTrainingFormGroup() {
    this.httpService.trainingForm.setValue({
      $key: null,
      topicName: '',
      trainerName: '',
      summary: '',
      // date: '',
      startTime: '',
      endTime: '',
      roomName: 'none'
    });
  }

  onCreateButtonClicked() {
    if (this.httpService.switchTrainingState == true) {
      if (this.httpService.trainingForm.valid) {
        this.httpService.insertFirebaseTraining(this.httpService.trainingForm.value);

        this.httpService.trainingForm.reset();
        this.toastr.success('New Training Created Sucessfully');
      }
    }
    if (this.httpService.switchTrainingState == false) {
      if (this.httpService.trainingForm.valid) {
        this.httpService.updateFirebaseTraining(this.httpService.trainingForm.value);

        this.httpService.trainingForm.reset();
        this.toastr.success(' Training Updated Sucessfully');
      }
    }
    this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
    this.intializeTrainingFormGroup();
  }

  onClearButtonClicked() {
    this.httpService.trainingForm.reset();
    this.intializeTrainingFormGroup();
  }

  onBackbuttonClicked() {
    this.router.navigate(['/trainings/trainings-list'], { relativeTo: this.route });
  }

  open() {
    const amazingTimePicker = this.apt.open();
    amazingTimePicker.afterClose().subscribe((timer) => {
      console.log(timer);
    });
  }

}
