import { VehicleType, VehicleDetailsType } from './vehicle';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

@Injectable ({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor (private http: HttpClient) {}

  getVehicles():Observable<VehicleType[]> {
    return this.http.get(this.baseUrl + '/vehicle')
      .pipe(map((response: any) => response.vehicles));
  }

  getVehiclesDetails():Observable<VehicleDetailsType[]> {
    return this.http.get(this.baseUrl + '/vehicledata')
      .pipe(map((vehicle: any) => vehicle.vehicleData));
  }
}
