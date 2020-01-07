import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Specialty } from './model/specialty';

@Injectable({
    providedIn: 'root'
})
export class SpecialtyService {
    
    private Url='https://clinica-api-01.herokuapp.com/specialtys';
    constructor(private http:HttpClient) {}

    getSpecialty(id: number) : Observable<Specialty>{

        return this.http.get<Specialty>(`${this.Url}/${id}`);
    }

    createSpecialty(patient:Object): Observable<Object>{
        return this.http.post(`${this.Url}`,patient);
    }
    updateSpecialty(id:number, value:any): Observable<Specialty>{
        return this.http.put<Specialty>(`${this.Url}/${id}`, value);
    }
    deleteSpecialty(id:number): Observable<any>{
        return this.http.delete(`${this.Url}/${id}`, {responseType:'text'});
    }

    getSpecialtys():Observable<Specialty[]>{
        return this.http.get<Specialty[]>(this.Url);
    }
    



}
