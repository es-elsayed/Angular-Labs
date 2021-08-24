import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
   selector: 'app-show-department',
   templateUrl: './show-department.component.html',
   styleUrls: ['./show-department.component.css']
})
export class ShowDepartmentComponent implements OnInit {


   dept: Department = new Department();
   constructor(public deptSer: DepartmentService, public ar: ActivatedRoute) { }

   ngOnInit(): void {
      // console.log(this.ar.snapshot.params["id"]);
      this.deptSer.showDepartment(this.ar.snapshot.params["id"]).subscribe(d => {
         this.dept = d;
      }, err => { console.log(err) }
      )
      // console.log(this.dept);
   }

}
