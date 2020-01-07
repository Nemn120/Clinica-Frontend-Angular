import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
@Component({
  selector: 'app-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class DetailsComponent implements OnInit {

  private patient: Patient = new Patient();
  
  constructor(private patientService: PatientService , 
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private _location : Location
     ) { }

  ngOnInit() {
    this.verCliente();
  }

  verCliente(): void{
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
  }


