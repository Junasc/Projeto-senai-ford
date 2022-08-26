import { Component } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { VehicleType, VehicleDetailsType } from 'src/app/api/vehicle';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  vehicles: VehicleType[] = [];
  selectedVehicleId: number = 0;
  selectedVehicle: VehicleType = {} as VehicleType;
  vehiclesDetails: VehicleDetailsType[] = [];
  selectedVehicleDetails : VehicleDetailsType = {} as VehicleDetailsType;

  // quando a pagina carrega, inicia a busca pelos carros, ao finalizar atribui na variavel vehicles, usada para renderizar o select
  constructor(private apiService: ApiService) {
    this.apiService.getVehicles().subscribe((vehicles) => (this.vehicles = vehicles));
    this.apiService.getVehiclesDetails().subscribe((vehicles) => (this.vehiclesDetails = vehicles));
  }

  // quando muda o select busca os detalhes do modelo do veiculo
  onChange(vehicleId:number){
    this.selectedVehicle = this.vehicles[vehicleId - 1];
  }

  //percorre os carros e verifica se algum tem o codigo vin digitado
  searchByVin(vin:string){
    this.vehiclesDetails.forEach((vehicleDetail: VehicleDetailsType) => {
      if(vehicleDetail.vin === vin) {
        this.selectedVehicleDetails = vehicleDetail;
      }
    });
  }
}
