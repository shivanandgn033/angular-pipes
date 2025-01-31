import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  imports: [CommonModule],
  templateUrl: './demopipes.component.html',
  styleUrl: './demopipes.component.css'
})
export class DemopipesComponent implements OnInit {


  today:Date = new Date();
  // pipe output
  // Default: Oct 5, 2023
  // Full Date: Thursday, October 5, 2023
  // Short Time: 2:15 PM
  price:number = 123.456;
 // promise = new Promise((resolve, reject) => {}
 promise: Promise<string> | undefined;

 ngOnInit() {
   // Simulate an async operation (e.g., HTTP request)
   this.promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve('Hello from Promise!');
     }, 2000); // Resolve after 2 seconds
   });
 }

  person: { [key: string]: any } = {};
    obj = {name: 'John', age: 30};
  //countries = ['USA', 'UK', 'India', 'UAE'];
  count:number=0;

}
