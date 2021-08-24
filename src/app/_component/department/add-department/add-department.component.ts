import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
   selector: 'app-add-department',
   templateUrl: './add-department.component.html',
   styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
   newDepartment: Department = new Department();

   Save() {
      this.deptSer.addDepartment(this.newDepartment).subscribe(d => {
         this.r.navigateByUrl("/departments")
      })

   }

   constructor(public deptSer: DepartmentService, public r: Router) { }

   ngOnInit(): void {
   }

}
