import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ValidatorFn,FormBuilder,FormGroup, FormControl,Validators } from "@angular/forms"; 
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  
  constructor(private firebase: AngularFireDatabase,private router: Router,
              private route: ActivatedRoute,private httpClient: HttpClient,)
              {
                this.roomList = this.firebase.list("rooms");
                this.roomList.snapshotChanges().subscribe(
                  list => {
                      this.array =list.map(item =>{
                        return{
                          $key:item.key,
                          ...item.payload.val()
                        };
                      });
                  });
               }


  ngOnInit() {
            }
        
    
    roomList: AngularFireList<any>;
    meetingDetails: AngularFireList<any>;
    array=[];
    
 }