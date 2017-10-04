// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

// Home Module imports
import { HomeRoutingModule } from './home-routing.module';

// This Module's Components
import { HomeComponent } from './home.component';
import { StoreComponent } from './store/store.component';
import { BlogComponent } from './blog/blog.component';
import { ScreenComponent } from './screen/screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ListBlogComponent } from "./blog/listBlog/listBlog.component";
import { DetailBlogComponent } from "./blog/detailBlog/detailBlog.component";

//Importing servicess
import { HomeService } from "./home.service";

@NgModule({
    imports: [CommonModule, HomeRoutingModule, AngularFireAuthModule, AngularFireDatabaseModule],
    declarations: [
        HomeComponent, StoreComponent, BlogComponent,
        NavbarComponent, FooterComponent, ScreenComponent,
        ListBlogComponent, DetailBlogComponent
    ],
    exports: [
        HomeComponent,
    ],
    providers:[HomeService]
})
export class HomeModule {

}
