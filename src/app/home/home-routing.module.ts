import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

// Importing Component
import { HomeComponent } from './home.component';
import { StoreComponent } from './store/store.component';
import { BlogComponent } from './blog/blog.component';
import { ScreenComponent } from './screen/screen.component';

const routes: Routes = [
    {path: '' , component: HomeComponent, children: [
        {path: '', component: ScreenComponent},
        {path: 'store', component: StoreComponent},
        {path: 'blog', component: BlogComponent}]}
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {
}

