import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importing angular component
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { InventoryComponent } from "./inventory/inventory.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductComponent } from "./product/product.component";
import { AddProductComponent } from "./product/addProduct/addProduct.component";
import { ListProductComponent } from "./product/listProduct/listProduct.component";
import { WorkersComponent } from "./workers/workers.component";
import { AddWorkersComponent } from "./workers/addWorkers/addWorkers.component";
import { ListWorkerComponent } from "./workers/listWorker/listWorker.component";
import { BlogComponent } from "./blog/blog.component";
import { EditBlogComponent } from "./blog/editBlog/editBlog.component";
import { NewBlogComponent } from "./blog/newBlog/newBlog.component";
import { ListingBlogComponent } from "./blog/listingBlog/listingBlog.component";
import {LoginComponent} from "./login/login.component";
import { AuthGuard } from './auth.service';

const routes:Routes = [
    {path:"", component:AdminComponent,children:[
        {path:"dashboard",component:DashboardComponent,canActivate: [AuthGuard] },
        {path:"inventory",component:InventoryComponent,canActivate: [AuthGuard]},
        {path:"orders",component:OrdersComponent,canActivate: [AuthGuard]},
        {path:"products",component:ProductComponent,canActivate: [AuthGuard],children:[
            {path:"list",component:ListProductComponent},
            {path:"add",component:AddProductComponent}
        ]},
        {path:"blog",component:BlogComponent,canActivate: [AuthGuard],children:[
            {path:"new",component:NewBlogComponent},
            {path:"edit/:id",component:EditBlogComponent},
            {path:"listing",component:ListingBlogComponent}
        ]},
        {path:"workers",component:WorkersComponent,canActivate: [AuthGuard],children:[
            {path:"add",component:AddWorkersComponent},
            {path:"list",component:ListWorkerComponent}
        ]},
        {path:"", redirectTo:"dashboard", pathMatch:"exact"},
        {path:"login",component:LoginComponent}
    ]}

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{

}