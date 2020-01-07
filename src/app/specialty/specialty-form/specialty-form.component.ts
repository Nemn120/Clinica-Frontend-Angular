import { Component, OnInit } from '@angular/core';
import { Specialty } from '../model/specialty';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
import { SpecialtyService } from '../specialty.service';

@Component({
  selector: 'app-specialtyr-form',
  templateUrl: './specialty-form.component.html',
  styleUrls: ['./specialty-form.component.css']
})
export class SpecialtyrFormComponent implements OnInit {

  private specialty: Specialty = new Specialty();

  constructor(private specialtyService: SpecialtyService , 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location : Location) { }

  ngOnInit() {
    
  }

  create(): void{
    this.specialtyService.createSpecialty(this.specialty)
      .subscribe( specialty=>{
          alert("Se registro especialidad con éxito");
          this._location.back();
        }
      )
  }
  onSumit(){
    this.create();
  }
  regresarSpecialtys(): void{
    this._location.back();
   
  }
}
