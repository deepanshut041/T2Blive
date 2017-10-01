import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  err:String;
  constructor( private _adminService:AdminService, private router:Router,private auth:AngularFireAuth) { 

  }

  ngOnInit() {
    document.getElementById("spinner").style.display = "none";
    document.getElementById("login-page").style.display = "block";  
  }
  onSubmit(email:any,password:any){
    this.err = null;
    console.log(email +" / " + password)
    if(email && password){
      document.getElementById("form").style.display = "none";
      document.getElementById("spinner").style.display = "block";
      let result = this._adminService.login(email,password)
      result.then((success)=>{
        this.router.navigate(["/admin/dashboard"])
      }).catch(
      (err)=>{
        document.getElementById("form").style.display = "block";
        document.getElementById("spinner").style.display = "none";
        this.err = err.message;
      }
      )
    }
    else{
      this.err = "Please enter details.."
    }
  }

}
