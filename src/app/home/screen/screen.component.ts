import { Component, OnInit } from '@angular/core';
import { Typed } from 'typed.js';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})

export class ScreenComponent implements OnInit {
  constructor() {

  }
  ngOnInit() {
    let typed = new Typed(".element", {
      strings: '#typed-strings',
      smartBackspace: true // Default value
    });    

  }
}