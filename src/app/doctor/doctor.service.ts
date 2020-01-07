import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Doctor } from './model/doctor';

@Injectable({
    providedIn: 'root'
})
export class DoctorService {
    
    private Url='https://clinica-api-01.herokuapp.com/doctors';
    constructor(private http:HttpClient) {}

    getDoctor(id: number) : Observable<Doctor>{

        return this.http.get<Doctor>(`${this.Url}/${id}`);
    }

    createDoctor(doctor:Object): Observable<Object>{
        return this.http.post(`${this.Url}`,doctor);
    }
    updateDoctor(id:number, value:any): Observable<Doctor>{
        return this.http.put<Doctor>(`${this.Url}/${id}`, value);
    }
    deleteDoctor(id:number): Observable<any>{
        return this.http.delete(`${this.Url}/${id}`, {responseType:'text'});
    }

    getDoctors():Observable<Doctor[]>{
        return this.http.get<Doctor[]>(this.Url);
    }
    



}