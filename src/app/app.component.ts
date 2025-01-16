import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SquarePipe } from './pipes/pure/square.pipe';
import { CommonModule } from '@angular/common';
import { CurrenttimePipe } from './pipes/impure/currenttime.pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrenttimePipe, SquarePipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  title = 'angular-pure-impure-pipes';
  squareNumber=4;
 
  
}
