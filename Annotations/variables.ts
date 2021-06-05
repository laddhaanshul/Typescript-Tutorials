/*Type Annotation:- The code we add to tell the typescript what type of value a 
variable will refer to.*/

let appleCount: number = 5;
appleCount = 10;

let str: string = "str";
let isAvailable: boolean = true;

let available: null = null;
let available2: undefined = undefined;

//in built types

let date: Date = new Date();

//Arrays
let colors: string[] = ["blue", "green", "yellow"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truth: boolean[] = [true, false, true, true];

//Classes
class Car {}

let car: Car = new Car();

//Object literal
let points: { x: number; y: number } = {
  x: 10,
  y: 20,
};
