import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../model/doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];
  constructor( private doctorService: DoctorService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
    this.doctorService.getDoctors().subscribe(data =>{ this.doctors = data;
    });
  }
  delete(doctor: Doctor): void {
   this.doctorService.deleteDoctor(doctor.id).subscribe(data =>{
     this.doctors = this.doctors.filter(p =>p !==doctor );
     alert("Doctor Eliminado !");
   });
  }

  view(doctor : Doctor): void {
    this.router.navigate(["/doctores",doctor.id,'ver']);      
  }
  edit(doctor : Doctor): void {
    this.router.navigate(["/doctores",doctor.id,'edit']);      
  }

  create(): void{
    this.router.navigate(["/doctores/form"]);      
  }
}
