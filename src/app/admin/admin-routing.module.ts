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

const routes:Routes = [
    {path:"", component:AdminComponent,children:[
        {path:"dashboard",component:DashboardComponent},
        {path:"inventory",component:InventoryComponent},
        {path:"orders",component:OrdersComponent},
        {path:"products",component:ProductComponent,children:[
            {path:"list",component:ListProductComponent},
            {path:"add",component:AddProductComponent}
        ]},
        {path:"workers",component:WorkersComponent,children:[
            {path:"add",component:AddWorkersComponent},
            {path:"list",component:ListWorkerComponent}
        ]},
        {path:"", redirectTo:"dashboard", pathMatch:"exact"}
    ]}

]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class AdminRoutingModule{

}