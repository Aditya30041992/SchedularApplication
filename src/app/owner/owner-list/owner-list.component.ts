import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TrainingDetailsComponent } from '../training-details/training-details/training-details.component';
import { ToastrService } from 'ngx-toastr';
import { TrainingService } from 'src/app/services/training.service';
import { NewTrainingComponent } from 'src/app/owner/new-trainings/new-training/new-training.component'

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  trainingsArray= [];
  value;
  
  constructor(private router: Router,
    private route: ActivatedRoute,
    //private matDialog: MatDialog,
    private toastr: ToastrService,
    private trainingService: TrainingService) { }
    
    ngOnInit() {

      this.trainingService.getTrainings().subscribe(
        list => {
          this.trainingsArray = list.map(item => {
            return{
              $key: item.key,
              ...item.payload.val()
            };
          });
        });
      }
      
      onNewButtonClicked(){
        this.router.navigate(['/new-training/new-trainings'], { relativeTo: this.route })
        
      }
      // onEditButtonClicked(){
      //   this.router.navigate(['/new-training/new-trainings'], { relativeTo: this.route })
      // }
      onRegisterButtonClicked(){
        this.router.navigate(['/owner/owners'], { relativeTo: this.route })
      }
      
      onDetailsButtonClicked(){
        this.router.navigate(['/meeting/meetings-details'], { relativeTo: this.route });
        
        
        // const matDialogConfig = new MatDialogConfig();
        // matDialogConfig.disableClose = true;
        // matDialogConfig.autoFocus = true;
        // matDialogConfig.width = "60%"
        // this.matDialog.open(TrainingDetailsComponent,matDialogConfig);
      } 
      
      onDeleteButtonClicked($key){
        if(confirm('Are You sure to delete this record ?')){
          this.trainingService.deleteTraining($key);
          this.toastr.success('Training Deleted Sucessfully');
          
        } 
      }
    }