import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <label>Enter new Counter : </label>
  <input value = 5 (input)="onChange($event)"/>
  <app-counter (messageEmitter)="showOutputData($event)" [counterValue]="counterValue" [ChildCounterValue]="ChildCounterValue" ></app-counter>
  <app-counter (messageEmitter)="showOutputData($event)" [counterValue]="counterValue" [ChildCounterValue]="ChildCounterValue" ></app-counter>
  
  <p>  {{outputData}}</p>
  <p>  {{ChildCounterValue}}</p>
  `,

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public counterValue = 5;
  public outputData;
  title = 'counter';
  ChildCounterValue: any;

  onChange(evt) {
    this.counterValue = eval(evt.target.value);
  }

  showOutputData(evt) {
    this.outputData = "Emmited value : " + evt;
    this.ChildCounterValue = "ChildCounterValue : " + evt;
  }
}
