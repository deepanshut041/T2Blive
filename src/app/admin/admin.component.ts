import { Component } from '@angular/core';
import { AdminService } from "./admin.service";
@Component({
    moduleId: module.id,
    selector: 'admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})
export class AdminComponent {
constructor(private _adminSevice:AdminService){}

    hideAsideMenu(element:HTMLElement){
        let c=document.getElementById("main-container")
        if(element.style.display == "block"){
            element.style.display = "none";
            c.style.marginLeft = "0px";
        }
        else{
            element.style.display = "block";
            
            c.style.marginLeft = "210px";
        }
    }

    expandSubMenu(element:HTMLElement){
        if(element.style.display == "block"){
            element.style.display = "none";
        }
        else{
            element.style.display = "block";
        }

    }

    onLogout(){
        this._adminSevice.logout();
    }
}
