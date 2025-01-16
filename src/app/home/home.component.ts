import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquarePipe } from '../pipes/pure/square.pipe';
import { CurrenttimePipe } from '../pipes/impure/currenttime.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule,SquarePipe,CurrenttimePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  squareNumber=4;
}
