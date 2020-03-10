import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1> Happy Monday! </h1>
  <p> I am paragraph ... </p>
  
  <app-yousef [height]= "height"></app-yousef>
  `
})
export class AppComponent {
  height = 500;
  title = 'demo';
}
