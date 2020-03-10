import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-yousef',
  // <input value = "{{title}}"/> not type safe!
  
  template: `
  <input [value] = "title" (keyup)="doSomething($event)"/>
 <p> {{title}}</p>
  <p >
      yousef works your height is {{height}}!
    </p>
  `,
  styles: [`
    p{
      color:red;
    }
  `],
  encapsulation : ViewEncapsulation.ShadowDom
 // encapsulation : ViewEncapsulation.None
})
export class YousefComponent {
@Input() height;
//@Output() ondance = new EventEmitter();
title = 5;
doSomething(value){
  console.log(value)
}
}
