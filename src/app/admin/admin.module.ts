// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// This Module's Components
import { AdminComponent } from './admin.component';

@NgModule({
    imports: [CommonModule

    ],
    declarations: [
        AdminComponent,
    ],
    exports: [
        AdminComponent,
    ]
})
export class AdminModule {

}
