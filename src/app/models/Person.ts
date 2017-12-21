import { Exercise } from "./Exercise";

export class Person {
  constructor(n: string, ID: string, pic: string) {
    this.name = n;
    this.id = ID;
    this.picture = pic;
  }
  id: string;
  picture: string;
  name: string;
  myExercises: Exercise[];
  exerciseList: Exercise[] = [
    { name: "Jogging"},
    { name: "Lifting"},
    { name: "Yoga"},
    
    { name: "Swimming"},
       
  ];
  
}

export class Image {
  id: string;
  src: string;
  link: string;
}

export class Room {
  players: Person[] = [];
}
