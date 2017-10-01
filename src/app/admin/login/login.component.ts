import { Component, OnInit } from "@angular/core";
import { AdminService } from "../admin.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {
  err:String;
  constructor( private _adminService:AdminService, private router:Router) { 

  }

  ngOnInit() {

  }
  onSubmit(email:any,password:any){
    console.log(email +" / " + password)
    if(email && password){
      let result = this._adminService.login(email,password)
      if (result) {
        this.router.navigate(["/admin/dashboard"])
      } else {
        this.err = "Wrong email or password";
      }
    }
    else{
      this.err = "Please enter details.."
    }
  }

}
