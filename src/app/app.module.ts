import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CreateComponent } from './patient/create/patient-create.component';
import { DetailsComponent } from './patient/details/patient-details.component';
import { ListComponent } from './patient/list/patient-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { DoctorFormComponent } from './doctor/doctor-form/doctor-form.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorViewComponent } from './doctor/doctor-view/doctor-view.component';
import { SpecialtyrFormComponent } from './specialty/specialty-form/specialty-form.component';
import { SpecialtyViewComponent } from './specialty/specialty-view/specialty-view.component';
import { SpecialtyEditComponent } from './specialty/specialty-edit/specialty-edit.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { SpecialtyListComponent } from './specialty/specialty-list/specialty-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    CreateComponent,
    DetailsComponent,
    ListComponent,
    PatientEditComponent,
    DoctorFormComponent,
    DoctorEditComponent,
    DoctorViewComponent,
    SpecialtyrFormComponent,
    SpecialtyViewComponent,
    SpecialtyEditComponent,
    DoctorListComponent,
    SpecialtyListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
