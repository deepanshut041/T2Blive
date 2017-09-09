import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {
  author = "ujwall";
  authorId = "2981"

  constructor(private http:Http) { }

  addBlog(newBlog){
    newBlog.post_author = this.author;
    newBlog.post_authorId = this.authorId;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/post', newBlog, {headers: headers}).map(res => res.json);
  }

}
