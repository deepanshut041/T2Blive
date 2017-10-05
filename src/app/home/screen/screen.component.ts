import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';
import { Typed } from 'typed.js';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})

export class ScreenComponent implements OnInit {
  constructor() {

  }
  public ngOnInit() {
    var options = {
    stringsElement: "#typed-strings",
    typeSpeed: 80,
    backDelay: 700,
    backSpeed: 100,
    showCursor: true,
    autoInsertCss: false,
    cursorChar: '|',
    loop: true,
    loopcount: Infinity,    
    shuffle: true,
    }

    var typed = new Typed("#typing", options);
}
}