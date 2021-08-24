import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
   providedIn: 'root'
})
export class DepartmentService {

   url: string = 'http://localhost:5000/departments/';
   showDept: Department = new Department();
   editDept: Department = new Department();

   constructor(public http: HttpClient) { }

   getDepartments() {
      return this.http.get<Department[]>(this.url);
   }

   showDepartment(id: any) {
      return this.http.get<Department>(this.url + "" + id);
   }

   addDepartment(d: Department) {
      return this.http.post<Department>(this.url, d);
   }

   editDepartment(editDept: Department) {
      return this.http.put<Department>(this.url + "" + editDept._id, editDept);
   }

   deleteDepartment(d: any) {

      return this.http.delete(this.url + "" + d);
   }
}
