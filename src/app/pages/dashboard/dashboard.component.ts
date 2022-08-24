import { Component } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { vehicle, vehicleDetails } from 'src/app/api/vehicle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  vehicles: vehicle[] = [];
  selectedVehicleId : number = 0;
  selectedVehicle : vehicle = {};
  selectedVehicleDetails : vehicleDetails = {};

  // quando a pagina carrega, inicia a busca pelos carros, ao finalizar atribui na variavel vehicles, usada para renderizar o select
  constructor(private apiService: ApiService) {
    this.apiService.getVehicles().subscribe((vehicles) => (this.vehicles = vehicles));
  }

  // quando muda o select busca os detalhes do carro selecionado e atribui na variavel selectedVehicleDetails
  onChange(vehicleId:number){
    this.selectedVehicle = this.vehicles[vehicleId - 1];
    this.apiService.getVehicleDetails(vehicleId).subscribe((vehicle) => (this.selectedVehicleDetails = vehicle));
  }
}
