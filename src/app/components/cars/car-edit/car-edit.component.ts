import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from 'src/app/shared/car.model';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  id!: number;
  isEditMode = false;
  carForm!: FormGroup;
  inputModel!: Car;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.isEditMode = params['id'] != null;

      this.initForm();
    });
  }

  private initForm() {
    /*this.inputModel.CAR_NAME = "";
    this.inputModel.CAR_STATUS = "";
    this.inputModel.CAR_TYPE_ID = 0;
    this.inputModel.IMG = "";
    this.inputModel.LICENE_PLATE = "";
    this.inputModel.CAR_TYPE_NAME = "";*/
    if (this.isEditMode) {
      const car = this.carService.getCar(this.id);
      this.inputModel = car
    }
  }
  onSubmit() {
    if (this.isEditMode) {
      this.carService.updateCar(this.id, this.inputModel);
    } else {
      console.log(this.carForm.value);
      this.carService.addCar(this.carForm.value);
      this.carForm.reset();
    }
  }

  goBack() {
    this.location.back();
  }
}
