import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AdminService } from "./admin.service";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router,private adminService:AdminService) {}

    /*canActivate(): Observable<boolean> {
      return Observable.from(this.auth.authState)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/admin/login' ]);
      })
    } */

    canActivate(): Observable<boolean>|boolean {
      return this.auth.authState.map(authState => {
        if(authState){
        if (authState.providerData[0].providerId == "password") 
          {
            return true;
        }
        else{
          this.router.navigate([ '/admin/login' ])
          return false;
        }
      }
      else{
        return false;
      }
      }).take(1);
  }
 
}