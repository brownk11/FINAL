import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { Person } from "../models/Person";
import { Exercise } from "../models/Exercise";
import { SharingService } from "../models/sharing.service";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  constructor(private router: Router, private share: SharingService) {}
  me: Person;
  ngOnInit() {
    if (this.share.me == null) {
      this.router.navigate(["/login"]);
    }
    this.me = this.share.me;
  }
  AddToDone(exerciseName: string, reps: number, weight: number) {
    this.me.myExercises.push(new Exercise(exerciseName));
    console.log(exerciseName + ", " + reps + ", " + weight);
  }
  removeFromMyExercises(key: Exercise) {
    var index = this.me.myExercises.indexOf(key, 0);
    if (index > -1) {
      this.me.myExercises.splice(index, 1);
    }
  }
}
