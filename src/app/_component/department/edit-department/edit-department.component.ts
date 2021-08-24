import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
   selector: 'app-edit-department',
   templateUrl: './edit-department.component.html',
   styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {

   dept: Department = new Department();
   constructor(public deptSer: DepartmentService, public r: Router, public ar: ActivatedRoute) { }

   ngOnInit(): void {
      // this.serDept.editDepartment(this.ar.snapshot.params["id"])
      this.deptSer.showDepartment(this.ar.snapshot.params["id"]).subscribe(d => {
         this.dept = d;
      })
   }
   Save() {
      this.deptSer.editDepartment(this.dept).subscribe(d => {

         this.r.navigateByUrl("/departments")
      })
   }


}
