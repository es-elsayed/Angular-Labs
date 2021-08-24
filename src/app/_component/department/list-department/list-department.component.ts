import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { DepartmentService } from 'src/app/_services/department.service';

@Component({
   selector: 'app-list-department',
   templateUrl: './list-department.component.html',
   styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {


   @Input() editDiv = false;

   @Output() fire: EventEmitter<void> = new EventEmitter();

   list: Department[] = [];

   constructor(public deptSer: DepartmentService, public r: Router, public ar: ActivatedRoute) {
      //can put next line her but we use constructor for dependancy injection container only
      // this.list = this.deptSer.getDepartments();
   }

   edit(d: number) {
      // this.deptSer.editDepartment(d);
      // this.editDiv = true;

   }

   delete(d: any) {
      // if (confirm("Are You Sure to Delete !"))
      //    this.deptSer.deleteDepartment(d);
      // this.http.delete('http://localhost:5000/departments',this.ar.snapshot.params())
      this.deptSer.deleteDepartment(d).subscribe(d => {
         console.log(d = " is deleted");
         this.r.navigateByUrl("/departments");
      })
   }

   ngOnInit(): void {

      this.deptSer.getDepartments().subscribe(d => {
         this.list = d;
      });

   }

}
