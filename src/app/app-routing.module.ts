import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { ContactusComponent } from './shared/contactus/contactus.component';
import { HomeComponent } from './shared/home/home.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AddDepartmentComponent } from './_component/department/add-department/add-department.component';
import { EditDepartmentComponent } from './_component/department/edit-department/edit-department.component';
import { ListDepartmentComponent } from './_component/department/list-department/list-department.component';
import { ShowDepartmentComponent } from './_component/department/show-department/show-department.component';

const routes: Routes = [
   { path: "home", component: HomeComponent },
   { path: "contactus", component: ContactusComponent },
   { path: "aboutus", component: AboutusComponent },
   { path: "departments", component: ListDepartmentComponent },
   { path: "departments/add", component: AddDepartmentComponent },
   { path: "departments/show/:id", component: ShowDepartmentComponent },
   { path: "departments/edit/:id", component: EditDepartmentComponent },
   { path: "", redirectTo: "home", pathMatch: "full" },
   { path: "**", component: NotfoundComponent }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {

}
