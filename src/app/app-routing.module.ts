import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegComponent } from './components/reg/reg.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenupageComponent } from './pages/menupage/menupage.component';


const routes: Routes = [

   {path:'',component:HomePageComponent} ,
   {path:'order',component:MenupageComponent} ,
   {path:'cart',component:CartComponent} ,
   {path:'reg',component:RegComponent} ,
   {path:'admin',component:AdminComponent} ,




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
