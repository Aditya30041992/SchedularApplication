import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.css']
})
export class TrainingDetailsComponent implements OnInit {
  
  oneArray=[];
  constructor(private toastr: ToastrService,private router: Router,
    private route: ActivatedRoute,private trainingService:TrainingService
    //private dialogRef: MatDialogRef<TrainingDetailsComponent>
    ) { }
    
    ngOnInit() {
      this.trainingService.getTraining().subscribe(
        list => {
          this.oneArray = list.map(item =>{
            return{
              $key: item.key,
              ...item.payload.val()
            };
          });
        });
    }
    
    
    onRegisterButtonClicked(){
      this.router.navigate(['/owner/owners'], { relativeTo: this.route })
      //this.dialogRef.close();
      this.toastr.success('Register sucessfully');
      
    }
    onBackButtonClicked(){
      this.router.navigate(['/owner/owners'], { relativeTo: this.route })
      //this.dialogRef.close();
      
    }
  }
  