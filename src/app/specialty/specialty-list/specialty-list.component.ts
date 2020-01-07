import { Component, OnInit } from '@angular/core';
import { Specialty } from '../model/specialty';
import { SpecialtyService } from '../specialty.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-specialty-list',
  templateUrl: './specialty-list.component.html',
  styleUrls: ['./specialty-list.component.css']
})
export class SpecialtyListComponent implements OnInit {

  specialtys : Specialty[];


  constructor(private specialtyService: SpecialtyService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.specialtyService.getSpecialtys().subscribe(data =>{ this.specialtys = data;
    });
  }

  delete(specialty: Specialty): void {
   this.specialtyService.deleteSpecialty(specialty.id).subscribe(data =>{
     this.specialtys = this.specialtys.filter(p =>p !==specialty );
     alert("Especialidad Eliminado !");
   });
  }

  view(specialty : Specialty): void {
    console.log("PATIEND ID: "+specialty.id);
    this.router.navigate(["/especialidades",specialty.id,'ver']);      
  }
  edit(specialty : Specialty): void {
    this.router.navigate(["/especialidades",specialty.id,'edit']);      
  }
  create(): void{
    this.router.navigate(["/especialidades/form"]);      
  }


}
