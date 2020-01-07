import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
@Component({
  selector: 'app-create',
  templateUrl: './patient-create.component.html',
  styleUrls: ['./patient-create.component.css']
})
export class CreateComponent implements OnInit {

  private patient: Patient = new Patient();

  constructor(private patientService: PatientService , 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location : Location) { }

  ngOnInit() {
    
  }

  create(): void{
    this.patientService.createPatient(this.patient)
      .subscribe( patient=>{
          alert("Se creo con exito al paciente");
          this._location.back();
        }
      )

  }
  onSumit(){
    this.create();
  }
  regresarPatients(): void{
    this._location.back();
   
  }



}
