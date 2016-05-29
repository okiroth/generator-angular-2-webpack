import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Just for example, to initiaze variables in constructor
import { Http, Response } from '@angular/http';

@Injectable()
export class <%= upName %>Service{

  constructor(
    private http:Http
  ){}

  // Incrementes 1 second every second
  getTime(){
    return Observable.timer(1000, 1000);
  }

}
