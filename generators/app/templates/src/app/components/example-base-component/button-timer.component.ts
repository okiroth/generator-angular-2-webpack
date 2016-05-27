import { Component, OnInit } from '@angular/core';
import { MyTimerService } from '../../services/example-timer.service';

@Component({
  selector: 'button-timer',
  template: require('./button-timer.component.html'),
  styles: [require('./button-timer.component.css')],

  providers: [
    MyTimerService
  ]
})

export class ButtonTimerComponent{

  status = 'Timer stoped';
  time = 0;

  constructor(
    private myTymeService:MyTimerService
  ){}

  startTimer(){
    this.status = 'Timer started';

    this.myTymeService.getTime().
      subscribe(time => this.time = time);
  }

}
