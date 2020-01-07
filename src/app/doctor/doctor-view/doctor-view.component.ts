import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from "@angular/common";
import { Doctor } from '../model/doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-view',
  templateUrl: './doctor-view.component.html',
  styleUrls: ['./doctor-view.component.css']
})
export class DoctorViewComponent implements OnInit {

  private doctor: Doctor;
  constructor(private DoctorService: DoctorService , 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _location : Location) { }

  ngOnInit() {
    this.verDoctor();
  }
  verDoctor(){
    this.activatedRoute.paramMap.subscribe(params => {
      if(params.has("id")){
        console.log("ID: "+ params.get("id"));
        this.DoctorService.getDoctor(+params.get("id")).subscribe(doctor => this.doctor = doctor);
      }
    })
  }
  
  regresarDoctors(): void{
    this._location.back();
   
  }


}
