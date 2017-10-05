import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../home.service";
import { Router } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: "app-listBlog",
  templateUrl: "./listBlog.component.html",
  styleUrls: ["./listBlog.component.css"]
})

export class ListBlogComponent implements OnInit {
  
  posts:any[];
  
    constructor(private _homeService: HomeService, private router: Router,public sanitizer: DomSanitizer) {
  
    }
    ngOnInit() {
      this._homeService.getBlogs().subscribe((blogs)=>{
        this.posts = blogs;
      });

    }

    openDetail(id:String){
      this.router.navigate(['blog','detail',id]);
    }
  
}
