import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { HomeComponent } from './shared/home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListDepartmentComponent } from './_component/department/list-department/list-department.component';
import { AddDepartmentComponent } from './_component/department/add-department/add-department.component';
import { EditDepartmentComponent } from './_component/department/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './_component/department/delete-department/delete-department.component';
import { ShowDepartmentComponent } from './_component/department/show-department/show-department.component';

@NgModule({
   declarations: [
      AppComponent,
      AboutusComponent,
      ContactusComponent,
      NotfoundComponent,
      HomeComponent,
      NavbarComponent,
      ListDepartmentComponent,
      AddDepartmentComponent,
      EditDepartmentComponent,
      DeleteDepartmentComponent,
      ShowDepartmentComponent
   ],
   imports: [
      BrowserModule, FormsModule, HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
