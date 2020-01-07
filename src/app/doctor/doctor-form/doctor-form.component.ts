import { Component, OnInit } from '@angular/core';
import { Doctor } from '../model/doctor';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.css']
})
export class DoctorFormComponent implements OnInit {

  
  private doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService , 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location : Location) { }

  ngOnInit() {
    
  }

  create(): void{
    this.doctorService.createDoctor(this.doctor)
      .subscribe( doctor=>{
          alert("Se registro correctamente al doctor");
          this._location.back();
        }
      )

  }
  onSumit(){
    this.create();
  }
  regresarDoctors(): void{
    this._location.back();
   
  }

}
