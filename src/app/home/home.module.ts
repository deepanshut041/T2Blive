// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Home Module imports
import { HomeRoutingModule } from './home-routing.module';

// This Module's Components
import { HomeComponent } from './home.component';
import { StoreComponent } from './store/store.component';
import { BlogComponent } from './blog/blog.component';
import { ScreenComponent } from './screen/screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [CommonModule, HomeRoutingModule],
    declarations: [
        HomeComponent, StoreComponent, BlogComponent,
        NavbarComponent, FooterComponent, ScreenComponent
    ],
    exports: [
        HomeComponent,
    ]
})
export class HomeModule {

}
