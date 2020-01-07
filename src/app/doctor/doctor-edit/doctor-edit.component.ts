import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { DoctorService } from '../doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  private doctor : Doctor;

  constructor(
    private doctorService: DoctorService , 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location : Location
  ) { }

  ngOnInit() {
    this.edit();
  }
  
  edit(): void{
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.has("id")){
        console.log("ID: "+ params.get("id"));
        this.doctorService.getDoctor(+params.get("id")).subscribe(doctor => this.doctor = doctor);
      }
    })
  }
  regresarDoctors(): void{
    this._location.back();
   
  }
  actualizar(doctor:Doctor){
    console.log("PACIENTE: "+doctor.id);
    this.doctorService.updateDoctor(doctor.id, doctor).subscribe(doctor =>{
      this.doctor = doctor;
      alert("Se actualizo con exito !");
      this._location.back();
    });
    

  }
  

}
