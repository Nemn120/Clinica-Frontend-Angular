import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Patient } from './model/patient';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    
    private Url='https://clinica-api-01.herokuapp.com/patients';
    constructor(private http:HttpClient) {}

    getPatient(id: number) : Observable<Patient>{

        return this.http.get<Patient>(`${this.Url}/${id}`);
    }

    createPatient(patient:Object): Observable<Object>{
        return this.http.post(`${this.Url}`,patient);
    }
    updatePatient(id:number, value:any): Observable<Patient>{
        return this.http.put<Patient>(`${this.Url}/${id}`, value);
    }
    deletePatient(id:number): Observable<any>{
        return this.http.delete(`${this.Url}/${id}`, {responseType:'text'});
    }

    getPatients():Observable<Patient[]>{
        return this.http.get<Patient[]>(this.Url);
    }
    



}
