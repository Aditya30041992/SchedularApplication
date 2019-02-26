import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Meeting } from 'src/app/models/meeting';
import { Training } from 'src/app/models/training';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

const endpoint = 'http://localhost:3000/api/v1/';
	const httpOptions = {
  	                headers: new HttpHeaders({
                    'Content-Type':  'application/json'
 	 			})
			};


@Injectable({ providedIn: 'root' })
export class HttpService {

	 
	private meeting: Meeting; // meetings start
	meetings:Meeting[];
	today= new Date();
	meetingList: AngularFireList<Meeting>;
	meetingDetails: AngularFireList<Meeting>;
	switchState: boolean;
	changeName: string;
	changeButtonName: string; // meetings end

	private training: Training; // traingings start
	trainingList: AngularFireList<Training>;
	trainingDetails: AngularFireList<Training>;
	selectedTraining: Training = new Training();
	switchTrainingState: boolean;
	changeTrainingName: string; // traingings start


	
	constructor(
		private http: HttpClient,
		private firebase: AngularFireDatabase,
		private router: Router,
		private route: ActivatedRoute,
		private httpClient: HttpClient,
	) {
		this.meeting = new Meeting(); 
		this.training = new Training();
	}

	private extractData(res: Response) {
		let body = res;
		return body || { };
	  }

	ngOnInit() {}

	form: FormGroup = new FormGroup({
		$key: new FormControl(null),
		meetingName: new FormControl('', Validators.required),
		organiserName: new FormControl('', Validators.required),
		agenda: new FormControl('', [ Validators.required, Validators.minLength(15) ]),
		attendeeList: new FormControl('', Validators.required),
		// date: new FormControl('',[Validators.required]),
		startTime: new FormControl('', [ Validators.required ]),
		endTime: new FormControl('', [ Validators.required ]),
		roomName: new FormControl('', Validators.required)
	  });

	  trainingForm: FormGroup= new FormGroup({
		$key: new FormControl(null),
		topicName: new FormControl('', Validators.required),
		trainerName: new FormControl('', Validators.required),
		summary: new FormControl('', [ Validators.required, Validators.minLength(15) ]),
		// date: new FormControl('',[Validators.required]),
		startTime: new FormControl('', [ Validators.required ]),
		endTime: new FormControl('', [ Validators.required ]),
		roomName: new FormControl('', Validators.required)
	  });

	  				/* Trainings CRUD operation */

	getFirebaseTrainings() {
		this.trainingList = this.firebase.list('trainings');
		return this.trainingList.snapshotChanges();
	}

	getFirebaseTraining() {
		this.trainingDetails = this.firebase.list('trainings');
		return this.trainingDetails.snapshotChanges();
	}

	insertFirebaseTraining(training) {
		this.trainingList.push({
			topicName: training.topicName,
			trainerName: training.trainerName,
			summary: training.summary,
			// date: training.date.toString(),
			startTime: training.startTime,
			endTime: training.endTime,
			roomName: training.roomName
		});
	}

	updateFirebaseTraining(training) {
		this.trainingList.update(training.$key, {
			topicName: training.topicName,
			trainerName: training.trainerName,
			summary: training.summary,
			// date: training.date.toString(),
			startTime: training.startTime,
			endTime: training.endTime,
			roomName: training.roomName
		});
	}

	deleteFirebaseTraining($key: string) {
		this.trainingList.remove($key);
	}

	PopulateForm(training) {
		this.changeTrainingName = 'Edit-Training';
		this.trainingForm.setValue(training);
		this.router.navigate([ '/new-training/new-trainings' ], { relativeTo: this.route });
	}

	returnPerticularTrainingDetails() {
		return this.trainingForm;
	  }

				/* Meetings CRUD operation */


	getFirebaseMeetings() {
		this.meetingList = this.firebase.list('meetings');
		return this.meetingList.snapshotChanges();
	}

	
	getFirebaseMeeting() {
		this.meetingDetails = this.firebase.list('meetings');
		return this.meetingDetails.snapshotChanges();
	}

	insertFirebaseMeeting(meeting){
		this.switchState = true;
		this.meetingList.push({
			// $key: meeting.$key,
			meetingName: meeting.meetingName,
			organiserName: meeting.organiserName,
			agenda: meeting.agenda,
			attendeeList: meeting.attendeeList,
			// date: meeting.date.toString(),
			startTime: meeting.startTime,
			endTime: meeting.endTime,
			roomName: meeting.roomName
		});		
	}

	updateFirebaseMeeting(meeting) {
		this.meetingList.update(meeting.$key, {
			// $key: meeting.$key,
			meetingName: meeting.meetingName,
			organiserName: meeting.organiserName,
			agenda: meeting.agenda,
			attendeeList: meeting.attendeeList,
			// date: meeting.date.toString(),
			startTime: meeting.startTime,
			endTime: meeting.endTime,
			roomName: meeting.roomName
		});
	}

	deleteFirebaseMeeting($key: string) :void {
		this.meetingList.remove($key);

	}

	populateForm(meeting) {
		this.switchState = false;
		this.changeName = 'Edit-Meeting';
		this.changeButtonName = 'Update';
		this.form.setValue(meeting);
		this.router.navigate([ '/meeting/new-meetings' ], { relativeTo: this.route });
	}
	returnPerticularMeetingDetails() {
		return this.form;
	  }

	Firebasegoback(){
		this.router.navigate(['/meeting/meetings'], { relativeTo: this.route });
	}

	formatDate(date: Date): string {
		const day = date.getDate;
		const month = date.getMonth() + 1;
		const year = date.getFullYear;
		return `${year}-${month}-${day}`;
	}

			/* Api starts */

	getMeetings(): Observable<any> {
		return this.http.get(endpoint + 'meetings').pipe(
		  map(this.extractData));
	  }
	  
	  getMeeting(id): Observable<any> {
		return this.http.get(endpoint + 'meetings/' + id).pipe(
		  map(this.extractData));
	  }
	  
	  addMeeting (meeting): Observable<any> {
		console.log(meeting);
		return this.http.post<any>(endpoint + 'meetings', JSON.stringify(meeting), httpOptions).pipe(
		  tap((product) => console.log(`added meeting w/ id=${meeting.id}`)),
		  catchError(this.handleError<any>('addMeeting'))
		);
	  }
	  
	  updateMeeting (id, meeting): Observable<any> {
		return this.http.put(endpoint + 'meetings/' + id, JSON.stringify(meeting), httpOptions).pipe(
		  tap(_ => console.log(`updated meeting id=${id}`)),
		  catchError(this.handleError<any>('updateMeeting'))
		);
	  }
	  
	  deleteMeeting (id): Observable<any> {
		return this.http.delete<any>(endpoint + 'meetings/' + id, httpOptions).pipe(
		  tap(_ => console.log(`deleted meeting id=${id}`)),
		  catchError(this.handleError<any>('deleteMeeting'))
		);
	  }
	  
	  getTrainings(): Observable<any> {
		return this.http.get(endpoint + 'trainings').pipe(
		  map(this.extractData));
	  }
	  
	  getTraining(id): Observable<any> {
		return this.http.get(endpoint + 'training/' + id).pipe(
		  map(this.extractData));
	  }
	  
	  addTraining (training): Observable<any> {
		console.log(training);
		return this.http.post<any>(endpoint + 'trainings', JSON.stringify(training), httpOptions).pipe(
		  tap((product) => console.log(`added training w/ id=${training.id}`)),
		  catchError(this.handleError<any>('addTraining'))
		);
	  }
	  
	  updateTraining (id, training): Observable<any> {
		return this.http.put(endpoint + 'trainings/' + id, JSON.stringify(training), httpOptions).pipe(
		  tap(_ => console.log(`updated training id=${id}`)),
		  catchError(this.handleError<any>('updateTraining'))
		);
	  }
	  
	  deleteTraining (id): Observable<any> {
		return this.http.delete<any>(endpoint + 'trainings/' + id, httpOptions).pipe(
		  tap(_ => console.log(`deleted training id=${id}`)),
		  catchError(this.handleError<any>('deleteTraining'))
		);
	  }

	/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			//   send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// better job of transforming error for user consumption
			console.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}
}
