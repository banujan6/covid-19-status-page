import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    trigger(){
        return this.http.get('https://hpb.health.gov.lk/api/get-current-statistical');
    }

}