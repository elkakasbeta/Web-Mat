import { Component } from '@angular/core';
import { CompComponent } from './comp/comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    
    CompComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'Web-Mat';
}
