import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    name : string;
    age:number;
    email:string;
    Exercises:string[];
    WorkoutPlan1:{
      workout1:String,
      workout2:String,
      workout3:String
    }
    
    
   
  constructor() { }

  ngOnInit() {
    this.name = 'Kwame Brown'
    this.age = 21;
    this.Exercises = [];
    this.WorkoutPlan1 = {
      workout1:'Dumbbell press',
      workout2:'Yoga',
      workout3:'Squats' }

    }
    onClick1(){
    this.Exercises.push("Lifting");

  }
  onClick2(){
    this.Exercises.push("Yoga");

  }
  onClick3(){
    this.Exercises.push("Cardio");

  }
  
  }

  interface WorkoutPlan1{
    workout1:String,
    workout2:String,
    workout3:String

  }
  
