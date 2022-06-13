import { Injectable } from '@angular/core';
import { Car } from '../shared/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor() { }
  private cars: Car[] = []

  getCars() {
    return this.cars;
  }

  getCar(car_id: number) {
    return this.cars[car_id]
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  updateCar(car_id: number, newCar: Car) {
  }

  deleteCar(car_id: number) {
  }
}
