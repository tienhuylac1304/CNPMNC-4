import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../shared/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  id!: number;
  car!: Car;
  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.car = this.carService.getCar(this.id);
    });
  }

  deleteCar(): void {
    this.carService.deleteCar(this.id);
    this.router.navigate(['cars']);
  }
}
