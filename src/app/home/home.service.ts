import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase,FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from "@angular/router";
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {
  blogs:FirebaseListObservable<any[]>;
  categories:FirebaseListObservable<any[]>;
  constructor(private af:AngularFireDatabase,private afAuth: AngularFireAuth, private router:Router) {
    this.blogs = af.list('/blogs');
    this.categories = af.list('/bCategory');
  }

  getBlogs(){
    return this.blogs as FirebaseListObservable<any[]>;
  }

  getCategories(){
    return this.categories as FirebaseListObservable<any[]>;
  }

}
