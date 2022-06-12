import { Injectable } from '@angular/core';
import { Car } from '../shared/car.model';
import { Driver } from '../shared/model/driver.model';

@Injectable({
    providedIn: 'root',
})
export class DriverService {
    constructor() { }
    drivers: Driver[] = []
    getDrivers() {
        return this.drivers;
    }

    getDiver(index: number) {
        return this.drivers[index];
    }

    addDriver(newDriver: Driver) {
        newDriver.id = "1"
        newDriver.driving_status = "free"
        newDriver.create_dt = (Date.now).toString()
        newDriver.status = true
        this.drivers.push(newDriver);
    }

    updateDriver(index: number, newDriver: Driver) {
        this.drivers[index] = newDriver;
    }

    deleteDriver(index: number) {
        this.drivers.splice(index, 1);
    }
}
