import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from '../specialty.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
import { Specialty } from '../model/specialty';
@Component({
  selector: 'app-specialty-view',
  templateUrl: './specialty-view.component.html',
  styleUrls: ['./specialty-view.component.css']
})
export class SpecialtyViewComponent implements OnInit {

  
  private specialty: Specialty;
  
  constructor(private specialtyService: SpecialtyService , 
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private _location : Location
     ) { }

  ngOnInit() {
    this.verEspecialidad();
  }

  verEspecialidad(): void{
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

}
