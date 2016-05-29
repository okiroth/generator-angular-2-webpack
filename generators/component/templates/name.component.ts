import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= name %>',
  template: require('./<%= name %>.component.html'),
  styles: [require('./<%= name %>.component.css')],

  providers: [],
  directives: []
})

export class <%= upName %>Component implements OnInit{

  constructor(
  ){}

  ngOnInit(){
    // runs after loading
  }

}
