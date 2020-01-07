import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class ListComponent implements OnInit {

  patients: Patient[];
  constructor( private patientService: PatientService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.patientService.getPatients().subscribe(data =>{ this.patients = data;
    });
  }

  delete(patient: Patient): void {
   this.patientService.deletePatient(patient.id).subscribe(data =>{
     this.patients = this.patients.filter(p =>p !==patient );
     alert("Paciente Eliminado !");
   });
  }

  view(patient : Patient): void {
    console.log("PATIEND ID: "+patient.id);
    this.router.navigate(["/pacientes",patient.id,'ver']);      
  }
  edit(patient : Patient): void {
    this.router.navigate(["/pacientes",patient.id,'edit']);      
  }

  create(): void{
    this.router.navigate(["/pacientes/form"]);      
  }

}
