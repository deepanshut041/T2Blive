import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../home.service";
import { Router } from "@angular/router";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: "app-detailBlog",
  templateUrl: "./detailBlog.component.html",
  styleUrls: ["./detailBlog.component.css"]
})

export class DetailBlogComponent implements OnInit {
  
  id:String = "-KvYQZ4zFDJQlssYt3ni";
  
  post:any;
  
  constructor(private _homeService: HomeService, private router: Router,public sanitizer: DomSanitizer) {

  }
  ngOnInit() {
    this._homeService.getBlog(this.id).subscribe((blog)=>{
      this.post = blog;
    });
  }
}
