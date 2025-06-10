import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SendFormService{
    private apiUrl = 'http://localhost:9090/api/barberos';

    constructor(private http: HttpClient){}

    submitData(formData: any): Observable<any>{
        return this.http.post<any>(this.apiUrl, formData);
    }
}