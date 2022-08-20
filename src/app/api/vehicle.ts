
export interface vehicle {
    id?: number;
    vehicle?: string;
    volumetotal?: number;
    connected?: number;
    softwareUpdates?: number;
}

export interface vehicleDetails {
    id?: number;
    vin?: string;
    odometer?: string;
    tirePressure?: string;
    status?: string;
    batteryStatus?: string;
    fuelLevel?: string;
    lat?: string;
    long?: string;
}