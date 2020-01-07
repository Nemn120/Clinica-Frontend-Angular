import { Component, OnInit } from '@angular/core';
import { Specialty } from '../model/specialty';
import { SpecialtyService } from '../specialty.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
@Component({
  selector: 'app-specialty-edit',
  templateUrl: './specialty-edit.component.html',
  styleUrls: ['./specialty-edit.component.css']
})
export class SpecialtyEditComponent implements OnInit {

  private specialty: Specialty = new Specialty();
  constructor(private specialtyService: SpecialtyService , 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location : Location) { }

  ngOnInit() {
    this.edit();
  }
  edit(): void{
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.has("id")){
        console.log("ID: "+ params.get("id"));
        this.specialtyService.getSpecialty(+params.get("id")).subscribe(specialty => this.specialty = specialty);
      }
    })

  }
  regresarSpecialtys(): void{
    this._location.back();
   
  }
  actualizar(specialty:Specialty){
    this.specialtyService.updateSpecialty(specialty.id, specialty).subscribe(specialty =>{
      this.specialty = specialty;
      alert("Se actualizo con exito !");
      this._location.back();
    });
    

  }


}
