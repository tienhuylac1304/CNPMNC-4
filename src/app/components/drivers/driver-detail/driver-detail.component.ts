import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from 'src/app/shared/model/driver.model';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../shared/car.model';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css'],
})
export class DriverDetailComponent implements OnInit {
  id!: string;
  car: Driver = new Driver('', '', '', 18, '', false, '', '', '', '', 1);
  tempCar!: Driver[];
  constructor(
    private carService: DriverService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.id = params['id'];
      this.tempCar = await this.carService.getDiver(this.id);
      this.car = this.tempCar[0];
      // console.log(this.car)
    });
  }

  deleteCar(): void {
    this.carService.softDeleteDriver(this.id);
    this.router.navigate(['drivers']);
  }
}
