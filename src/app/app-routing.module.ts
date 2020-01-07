

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { CreateComponent } from './patient/create/patient-create.component';
import { DetailsComponent } from './patient/details/patient-details.component';
import { ListComponent } from './patient/list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorFormComponent } from './doctor/doctor-form/doctor-form.component';
import { DoctorViewComponent } from './doctor/doctor-view/doctor-view.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { SpecialtyListComponent } from './specialty/specialty-list/specialty-list.component';
import { SpecialtyrFormComponent } from './specialty/specialty-form/specialty-form.component';
import { SpecialtyEditComponent } from './specialty/specialty-edit/specialty-edit.component';
import { SpecialtyViewComponent } from './specialty/specialty-view/specialty-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/pacientes/listar', pathMatch: 'full'},

  {path: 'pacientes/listar', component: ListComponent},
  {path: 'pacientes/form', component: CreateComponent},
  {path: 'pacientes/:id/ver', component: DetailsComponent},
  {path: 'pacientes/:id/edit', component: PatientEditComponent },
  {path: 'doctores/listar', component: DoctorListComponent},
  {path: 'doctores/form', component: DoctorFormComponent},
  {path: 'doctores/:id/ver', component: DoctorViewComponent},
  {path: 'doctores/:id/edit', component: DoctorEditComponent },
  {path: 'especialidades/listar', component: SpecialtyListComponent},
  {path: 'especialidades/form', component: SpecialtyrFormComponent},
  {path: 'especialidades/:id/ver', component: SpecialtyViewComponent},
  {path: 'especialidades/:id/edit', component: SpecialtyEditComponent }

];

@NgModule({
  
  imports: [
    
    RouterModule.forRoot(routes),
    
  ],
  exports : [RouterModule],
  
})
export class AppRoutingModule { }