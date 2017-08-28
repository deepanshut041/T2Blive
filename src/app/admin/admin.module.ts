// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from "./admin-routing.module";

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

@NgModule({
    imports: [CommonModule,AdminRoutingModule

    ],
    declarations: [
        AdminComponent, DashboardComponent, InventoryComponent, OrdersComponent,
        ProductComponent, AddProductComponent, ListProductComponent,WorkersComponent,
        AddWorkersComponent,ListWorkerComponent
    ],
    exports: [
        AdminComponent,
    ]
})
export class AdminModule {

}
