

import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  private patient: Patient = new Patient();
  constructor(private patientService: PatientService , 
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
        this.patientService.getPatient(+params.get("id")).subscribe(patient => this.patient = patient);
      }
    })

  }
  regresarPatients(): void{
    this._location.back();
   
  }
  actualizar(patient:Patient){
    console.log("PACIENTE: "+patient.id);
    this.patientService.updatePatient(patient.id, patient).subscribe(patient =>{
      this.patient = patient;
      alert("Se actualizo con exito !");
      this._location.back();
    });
    

  }

}
