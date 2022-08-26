export type VehicleType = {
  id: number;
  vehicle: string;
  volumetotal: number;
  connected: number;
  softwareUpdates: number;
}

export type VehicleDetailsType = {
  id: number;
  vin: string;
  odometer: string;
  tirePressure: string;
  status: string;
  batteryStatus: string;
  fuelLevel: string;
  lat: string;
  long: string;
}
