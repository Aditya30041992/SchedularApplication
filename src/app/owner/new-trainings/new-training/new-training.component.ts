import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AmazingTimePickerService } from 'amazing-time-picker';
import { TrainingService } from 'src/app/services/training.service';
import { ToastrService } from 'ngx-toastr';
import { RoomService } from 'src/app/services/room.service'




@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  
  constructor( private toastr: ToastrService,private router: Router,
    private route: ActivatedRoute,
    private apt: AmazingTimePickerService,
    private trainingService:TrainingService,
    private roomService: RoomService) {
    
     }
    
    formControls = this.trainingService.form.controls;
    ngOnInit() {
      this.trainingService.getTrainings();
      this.trainingService.switchState=true;
    }
   
    onCreateButtonClicked(){
      
      if(this.trainingService.switchState == true){
        if(this.trainingService.form.valid){
          this.trainingService.insertTraining(this.trainingService.form.value);
          this.trainingService.form.reset();
          this.toastr.success('New Training Created Sucessfully');  
        }
      }
      if(this.trainingService.switchState == false){
        if(this.trainingService.form.valid){
          this.trainingService.updateTraining(this.trainingService.form.value);
          this.trainingService.form.reset();
          this.toastr.success(' Training Updated Sucessfully'); 
        }
      }
      this.router.navigate(['/owner/owners'], { relativeTo: this.route })
      this.trainingService.intializeTrainingFormGroup();
    }
    
    onClearButtonClicked(){
      this.trainingService.form.reset();
      this.trainingService.intializeTrainingFormGroup();
      
    }
    onBackbuttonClicked(){
      this.router.navigate(['/owner/owners'], { relativeTo: this.route })
      
    }
    
    open(){
      const amazingTimePicker = this.apt.open();
      amazingTimePicker.afterClose().subscribe(timer =>{
        console.log(timer);
      });
    }
    
    
  }
  