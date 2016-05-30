import { Component, OnInit } from '@angular/core';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

import { ButtonTimerComponent } from './components/example-base-component/button-timer.component';

@Component({
  selector: 'app-container',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],

  directives: [
    ButtonTimerComponent
  ]
})

export class AppComponent implements OnInit {

  ngOnInit(){
    console.log('App start load');
  }
}
