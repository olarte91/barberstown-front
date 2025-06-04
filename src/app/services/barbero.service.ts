import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Barbero } from "../models/barbero.interface";

@Injectable({
    providedIn: 'root'
})

export class BarberoService{

    private apiUrl = 'http://localhost:9090/api/barberos';

    constructor (private httpClient: HttpClient){}

    getBarberos(): Observable<Barbero[]>{
        return this.httpClient.get<Barbero[]>(this.apiUrl);
    }

    createBarbero(barbero: Barbero): Observable<Barbero>{
        return this.httpClient.post<Barbero>(this.apiUrl, barbero);
    }

}