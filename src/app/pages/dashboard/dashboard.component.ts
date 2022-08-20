import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { vehicle, vehicleDetails } from 'src/app/api/vehicle';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vehicles: vehicle[] = [];
  selectedVehicleId : number = 0;
  selectedVehicle : vehicle = {};
  selectedVehicleDetails : vehicleDetails = {};

  constructor(private apiService: ApiService) {
    this.getVehicles();
  }

  ngOnInit(): void {
  }
  getVehicles(): void {
    this.apiService.getVehicles().subscribe((vehicles) => (this.vehicles = vehicles.vehicles));
  }

  getVehicleDetails(vehicleId:number): void {
    this.apiService.getVehicleDetails(vehicleId).subscribe((vehicle) => (this.selectedVehicleDetails = vehicle));
  }

  onChange(vehicleId:number){
    this.selectedVehicle = this.vehicles[vehicleId - 1];
    this.getVehicleDetails(vehicleId);
  }
}
