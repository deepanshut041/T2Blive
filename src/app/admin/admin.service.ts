import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


@Injectable()
export class AdminService {
  author = "ujwall";
  authorId = "2981";
  admin_name:String;
  admin_email:String;
  admin_uid:String; 
  blogs:FirebaseListObservable<any[]>;
  bCategory:FirebaseListObservable<any[]>;

  user:Observable<firebase.UserInfo>

  constructor(private af:AngularFireDatabase,private afAuth: AngularFireAuth, private router:Router) { 
    this.user = afAuth.authState;
    this.blogs = af.list('/blogs');
    this.bCategory = af.list('/bCategory');
  }
  
  //Blog functions
  addBlog(newBlog){
    return this.blogs.push(newBlog); 
  }
  updateBlogImage(id,imgUrl){
    return this.blogs.update(id,{post_imgurl:imgUrl});
  }
  addbCategory(category){
    return this.bCategory.push(category); 
  }
  getbCategories(){
    return this.bCategory as FirebaseListObservable<any[]>;
}

  

  //Authencation functions
  login(email:any, password:any):firebase.Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
      this.afAuth.auth.signOut().then((success)=>{
        this.router.navigateByUrl('admin/login');
      })  
  }
}
