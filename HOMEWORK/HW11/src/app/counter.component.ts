import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
    <button (click)="onDecrease()">
      -
    </button>
    <span> {{counterValue}}</span>
    <button (click)="onIncrease()">
      +
    </button>
  </div>
  `,
  styles: [`
  div{
    padding: 1%;
    margin: 1%;
  }
  button{
    padding: 1%;
    margin: 1%;
  }
  `]
})
export class CounterComponent {
  @Input() counterValue;
  @Input() ChildCounterValue;
  @Output() messageEmitter = new EventEmitter();

  onDecrease() {
    this.counterValue--;
    this.emitMessage();
  }
  onIncrease() {
    this.counterValue++;
    this.emitMessage();
  }

  emitMessage() {
    this.messageEmitter.emit(this.counterValue);
  }
}
