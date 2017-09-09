import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../admin.service";

@Component({
  selector: "app-newBlog",
  templateUrl: "./newBlog.component.html",
  styleUrls: ["./newBlog.component.css"]
})

export class NewBlogComponent implements OnInit {
  categories;

  constructor(private _adminService: AdminService) { 

  }

  ngOnInit() {

  }

  newBlog(title,content){
    let imgUrl = "jksdkjsd"
    let newPost = {
      post_type: "innovation",
      post_title: title,
      post_content: content,
      post_author: "",
      post_authorId: "",
      post_imgurl: imgUrl
    }
    this._adminService.addBlog(newPost).subscribe((data:any)=>{
      if(data.success){
        console.log("Blog Posted SuccessFully");
      }
      else{
        console.log("Failed to post Blog");
      }
    })
  }
}
