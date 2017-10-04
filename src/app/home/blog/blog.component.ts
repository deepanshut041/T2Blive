import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { Router } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  constructor() {

  }
  ngOnInit() {
  }

  
}
