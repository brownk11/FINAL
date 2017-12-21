import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { Recorder, User, Exercise} from '../models/exercise';
import { ExerciseService } from '../models/exercise.service';
import { Router } from '@angular/router';

declare const FB: any;

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  
    recorder = new Recorder();
    me = new User();

    ex="";
    editor = false;
  
    constructor(private http: Http, public exercise: ExerciseService, private router: Router) { }
  
        ngOnInit() {
            if(this.exercise.me == null){
                this.router.navigate(['/login']);
            }
            this.me = this.exercise.me;
            setInterval(() => this.update(), 1000)
        }

        update(){
            this.http.get(this.exercise.apiRoot +  "/exercise/recorder").subscribe( data => {
                this.recorder = data.json();
            });
        }
  
        edit(){
            this.editor=true;
        }
        
        done(){
            this.editor=false;
        }


        submitExercise(e: MouseEvent, exercise: Exercise){
            e.preventDefault();
            const data = { text: exercise.text, user: this.me.name };
            this.http.post(this.exercise.apiRoot + "/exercise/recorder/exercises", data).subscribe(res => {
            });    
        }  
        submitExercise2(e: MouseEvent, exercise: String){
            e.preventDefault();
            const data = { text: exercise, user: this.me.name };
            this.http.post(this.exercise.apiRoot + "/exercise/recorder/exercises", data).subscribe(res => {
            });    
        }  
        deleteExercise(e:MouseEvent){
            e.preventDefault();
            const data = { text: "goodbye", user: this.me.name };
            this.http.post(this.exercise.apiRoot + "/exercise/recorder/deletede", data).subscribe(res => {
            });    
        } 
        
      
}