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
  
  ratedPosts:any[];
  categories:any[];
  
    constructor(private _homeService: HomeService, private router: Router,public sanitizer: DomSanitizer) {
  
    }
    ngOnInit() {
      this._homeService.getBlogs().subscribe((blogs)=>{
        this.ratedPosts = blogs;
      });
      this._homeService.getCategories().subscribe((categories)=>{
        this.categories = categories;
      });

    }
}
