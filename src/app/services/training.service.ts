import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidatorFn,FormBuilder,FormGroup, FormControl,Validators } from "@angular/forms"; 
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Training } from '../models/training';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  
  apiURL: string = 'https://training-4ae7a.firebaseio.com/';

  private training: Training;
  trainingList: AngularFireList<Training>;
  trainingDetails: AngularFireList<Training>;
  switchState: boolean; 
  
  constructor(private firebase: AngularFireDatabase,private router: Router,private route: ActivatedRoute,
              private httpClient: HttpClient)
              {
                this.training=new Training();
              }

    
    form: FormGroup = new FormGroup({
      $key: new FormControl(null),
      topicName: new FormControl('',Validators.required),
      trainerName: new FormControl('',Validators.required),
      summary: new FormControl('',[Validators.required, Validators.minLength(15)]),
      //date: new FormControl('',[Validators.required]),
      startTime: new FormControl('',[Validators.required]),
      endTime: new FormControl('',[Validators.required]),
      roomName:new FormControl('',Validators.required)
    });
    
    ngOnInit() {
  
    }

    intializeTrainingFormGroup(){
      this.form.setValue({
        $key: null,
        topicName: '' ,
        trainerName: '' ,
        summary: '' ,
        //date: '',
        startTime: '',
        endTime: '',
        roomName: 'none'
        
      });
    }
    
    getTrainings(){
      this.trainingList = this.firebase.list('trainings');
      return this.trainingList.snapshotChanges();
    }
    
    getTraining(){
      this.trainingDetails = this.firebase.list('trainings');
      return this.trainingDetails.snapshotChanges();
    }

    insertTraining(training){
      this.trainingList.push({
        topicName: training.topicName,
        trainerName: training.trainerName,
        summary: training.summary,
        //date: training.date.toString();
        startTime: training.startTime,
        endTime: training.endTime,
        roomName: training.roomName
        
      });

        console.log(training);
        console.log(this.apiURL);
        return this.httpClient.post(`${this.apiURL}/trainings/`,training);
    }
    
    updateTraining(training){
      this.trainingList.update(training.$key,
        {
          topicName: training.topicName,
          trainerName: training.trainerName,
          summary: training.summary,
          //date: training.date.toString();
          startTime: training.startTime,
          endTime: training.endTime,
          roomName: training.roomName
        });
          console.log(this.trainingList);
          console.log(training);
          console.log(training.$key);
          return this.httpClient.post(`${this.apiURL}/trainings/`,training);
      }
      
      deleteTraining($key: string){
        console.log(this.trainingList);
        this.trainingList.remove($key);
        console.log(this.trainingList);
        console.log($key);
        return this.httpClient.delete(`${this.apiURL}/mettings/${$key}`);
      }
      
      populateForm(training){
        this.form.setValue(training);
        console.log(this.trainingList);
        console.log(training);
        console.log(training.$key);
        console.log("i am edit form of training");
        this.router.navigate(['/new-training/new-trainings'], { relativeTo: this.route })
        
      }
      
    }