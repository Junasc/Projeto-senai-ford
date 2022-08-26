import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class ApiService {
    private baseUrl = 'http://localhost:3000';

    constructor (private http:HttpClient) {}

    getVehicles():Observable<any> {
        return this.http.get<any> (this.baseUrl + '/vehicle').pipe(map(vehicle => vehicle.vehicles));
    }

    getVehiclesDetails():Observable<any> {
        return this.http.get<any> (this.baseUrl + '/vehicledata').pipe(map(vehicle => vehicle.vehicleData));
    }
}
