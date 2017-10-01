import { Component, OnInit, ElementRef } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Router } from "@angular/router";
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: "app-newBlog",
  templateUrl: "./newBlog.component.html",
  styleUrls: ["./newBlog.component.css"]
})

export class NewBlogComponent implements OnInit {
  categories:any[];
  admin_email: String;
  admin_id: String;
  image: File;
  imgUrl: String;
  errBlog:String;
  successBlog:String;
  successC:String;
  errC:String;

  constructor(private _adminService: AdminService, private router: Router
    , private element: ElementRef) {

  }

  ngOnInit() {
    const userKey = Object.keys(window.localStorage).filter(item => item.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
    this.admin_email = user.email;
	  this.admin_id = user.uid;
    document.getElementById("spinner").style.display = "none";
    document.getElementById("spinnerC").style.display = "none";
    document.getElementById("blog-form").style.display = "block";
    this._adminService.getbCategories().subscribe((categories)=>{
      this.categories = categories
      console.log(categories);
      }
    )
  }
  onChange(event) {
    this.image = event.srcElement.files[0];
    var reader = new FileReader();
    var img = this.element.nativeElement.querySelector('.image');
    reader.onload = function (e) {
      var src = e.target['result'];
      img.src = src;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  newBlog(title, content,category,videoUrl) {
	this.errBlog=null;
  let newPost = {
    post_type: category,
    post_title: title,
    post_content: content,
    post_author: this.admin_email,
    post_authorId: this.admin_id,
    post_videoUrl:null
  }
  document.getElementById("blog-form").style.display = "none";
  document.getElementById("spinner").style.display = "block";
	 if(this.image && !videoUrl){
		this._adminService.addBlog(newPost).then((blog) => {
			this.uploading(blog);
		 },
			(err) => {
			  this.errBlog = err.message;
			  document.getElementById("spinner").style.display = "none";
			  document.getElementById("blog-form").style.display = "block";
			}
		 )
   }
   else if(videoUrl&&!this.image){
    newPost.post_videoUrl = videoUrl
    this._adminService.addBlog(newPost).then((blog)=>{
      document.getElementById("spinner").style.display = "none";
		  this.successBlog = "Blog posted !!!"
      setTimeout(()=>{
        this.router.navigate(["/admin/blog/listing"]);
        },3000)
    },
    (err)=>{
      this.errBlog = err.message;
      document.getElementById("spinner").style.display = "none";
      document.getElementById("blog-form").style.display = "block";
    })
   }
	 else{
		 this.errBlog = "Please fill complete information correctly"
		 document.getElementById("spinner").style.display = "none";
		 document.getElementById("blog-form").style.display = "block";
	 }
  }

  newCategory(category) {
    document.getElementById("spinnerC").style.display = "block";
    document.getElementById("category-form").style.display = "none";
    let newCategory = {
      category_name: category
    }
    if(category){
      this.errC = null;
      this._adminService.addbCategory(newCategory).then(
        ()=>{
          document.getElementById("spinnerC").style.display = "none";
          this.successC="Category added !!"
          this._adminService.getbCategories().subscribe((categories)=>{
            setTimeout(()=>{
              document.getElementById("category-form").style.display = "block";
              this.successC = null;
            },3000)
            this.categories = categories
          }
          )
        },(err)=>{
          this.errC = err.message;
        }
      )
    }
  }
  uploading(blog){
	var task = firebase.storage().ref().child('blog/' + blog.key + "/").put(this.image);
	task.then((snapshot) => {
	  this._adminService.updateBlogImage(blog.key, snapshot.downloadURL).then(() => {
		document.getElementById("spinner").style.display = "none";
		  this.successBlog = "Blog posted !!!"
		  setTimeout(()=>{
			this.router.navigate(["/admin/blog/listing"]);
		  },3000)
	  }, () => {
		 console.log("Failed to upload picture")
	  })
	},
	  (err) => {
		this.errBlog = err.message;
		document.getElementById("spinner").style.display = "none";
		document.getElementById("blog-form").style.display = "block";
	   }
	)
  }
}
