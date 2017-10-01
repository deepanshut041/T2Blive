import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AngularFireAuth } from 'angularfire2/auth';
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


  user:Observable<firebase.UserInfo>

  constructor(private http:Http,private afAuth: AngularFireAuth, private router:Router) { 
    this.user = afAuth.authState;
  }

  addBlog(newBlog){
    newBlog.post_author = this.author;
    newBlog.post_authorId = this.authorId;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post', newBlog, {headers: headers}).map(res => res.json);
  }

  addBCategory(newCategory){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post/categories', newCategory, {headers: headers}).map(res => res.json);
  }

  login(email:any, password:any):firebase.Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
      this.afAuth.auth.signOut().then((success)=>{
        this.router.navigateByUrl('admin/login');
      })
      
  }
}
