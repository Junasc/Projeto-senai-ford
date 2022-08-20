import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { vehicle } from 'src/app/api/vehicle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  vehicles: vehicle[] = [];

  constructor(private apiService: ApiService) { 
    this.getVehicles();
  }

  ngOnInit(): void {
  }

  getVehicles(): void {
    this.apiService.getVehicles().subscribe((vehicles) => (this.vehicles = vehicles.vehicles));
  }
}
