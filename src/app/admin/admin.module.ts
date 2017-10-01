// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from "./admin-routing.module";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// This Module's Components
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
import { LoginComponent } from "./login/login.component";
// This importing service
import { AdminService } from "./admin.service";
import { AuthGuard } from "./auth.service";
@NgModule({
    imports: [CommonModule,AdminRoutingModule, FormsModule, ReactiveFormsModule,
        HttpClientModule,AngularFireAuthModule,AngularFireDatabaseModule
    ],
    declarations: [
        AdminComponent, DashboardComponent, InventoryComponent, OrdersComponent,
        ProductComponent, AddProductComponent, ListProductComponent,WorkersComponent,
        AddWorkersComponent,ListWorkerComponent, BlogComponent, EditBlogComponent,
        NewBlogComponent, ListingBlogComponent, LoginComponent
    ],
    exports: [
        AdminComponent,
    ],
    providers: [AdminService,AuthGuard]
})
export class AdminModule {

}
