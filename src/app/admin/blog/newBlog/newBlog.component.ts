import { Component, OnInit, ElementRef } from "@angular/core";
import { AdminService } from "../../admin.service";
import { Router } from "@angular/router";
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: "app-newBlog",
  templateUrl: "./newBlog.component.html",
  styleUrls: ["./newBlog.component.css"]
})

export class NewBlogComponent implements OnInit {
  categories;
  admin_email: String;
  admin_id: String;
  image: File;
  imgUrl: String;
  constructor(private _adminService: AdminService, private router: Router, private firebaseApp: FirebaseApp
    , private element: ElementRef) {

  }

  ngOnInit() {
    const userKey = Object.keys(window.localStorage)
      .filter(item => item.startsWith('firebase:authUser'))[0];
    const user = userKey ? JSON.parse(localStorage.getItem(userKey)) : undefined;
    this.admin_email = user.email;
    this.admin_id = user.uid;
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
  newBlog(title, content) {
    let newPost = {
      post_type: "innovation",
      post_title: title,
      post_content: content,
      post_author: this.admin_email,
      post_authorId: this.admin_id,
      post_imgurl: ""
	 }
	 if(this.image){
		this._adminService.addBlog(newPost).then((blog) => {
			var task = this.firebaseApp.storage().ref().child('blog/' + blog.key + "/").put(this.image);
			task.then((snapshot) => {
			  this._adminService.updateBlogImage(blog.key, snapshot.downloadURL).then(() => {
				 this.router.navigate(["/admin/blog/listing"]);
			  }, () => {
				 console.log("Failed to upload picture")
			  })
			},
			  (err) => { }
			)
	
		 },
			(err) => {
			  console.log("Blog not posted")
			}
		 )
	 }
  }

  newCategory(category) {
    let newCategory = {
      category_name: category
    }
  }
}
