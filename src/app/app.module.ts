import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import {MatChipsModule} from '@angular/material/chips';
import { CartComponent } from './pages/cart/cart.component';
import { RegComponent } from './components/reg/reg.component';

import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';
import { ManagemenuComponent } from './components/managemenu/managemenu.component';
import { EditdialogComponent } from './components/editdialog/editdialog.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NewdialogComponent } from './components/newdialog/newdialog.component';





/////



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    MenuComponent,
    MenupageComponent,
    CartComponent,
    RegComponent,
    ManagemenuComponent,
    EditdialogComponent,
    AdminComponent,
    NewdialogComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, //form validation
    FormsModule,         //two way binding
    HttpClientModule,    //get-post-delete
    FlexLayoutModule,
    BrowserAnimationsModule  ,   //responsive
    MatChipsModule,
    MatBadgeModule,
    MatDialogModule



  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
