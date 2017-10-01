import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
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

  constructor(private http:Http,private afAuth: AngularFireAuth) { 
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

  login(email:any, password:any){
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then(
      (success)=>{
        this.user = this.afAuth.authState;
        this.user.subscribe((admin)=>{
          this.admin_name = admin.displayName;
          this.admin_uid = admin.providerId;
          this.admin_email = admin.email;
        })
        console.log(success);
        return true;
      }).catch(
        (err) => {
        console.log(err);
        return false;
      })
  }

}
