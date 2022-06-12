import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { DriverService } from 'src/app/services/driver.service';
import { Car } from 'src/app/shared/model/car.model';
import { Driver } from 'src/app/shared/model/driver.model';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css'],
})
export class DriverEditComponent implements OnInit {
  id!: string;
  isEditMode = false;
  driverForm!: FormGroup;
  inputModel!: Driver

  constructor(
    private driverService: DriverService,
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.isEditMode = params['id'] != null;

      this.initForm();
    });
  }

  private async initForm() {
    this.inputModel = new Driver("", "", "", 18, "", false, "", "", "", 1)
    if (this.isEditMode) {
      const driver = await this.driverService.getDiver(this.id);
      console.log(driver[0])
      this.inputModel = driver[0]
    }
    this.driverForm = new FormGroup({
      //driver
      name: new FormControl(this.inputModel.name, Validators.required),
      age: new FormControl(this.inputModel.age, Validators.required),
      national_id: new FormControl(this.inputModel.national_id, Validators.required),
      //car
      car_name: new FormControl(this.inputModel.car_name, Validators.required),
      bien_so: new FormControl(this.inputModel.bien_so, Validators.required),
      seat: new FormControl(this.inputModel.seat, Validators.required)
    });
  }
  get name() {
    return <FormControl>this.driverForm.get('name');
  }
  get age() {
    return <FormControl>this.driverForm.get('age');
  }
  get national_id() {
    return <FormControl>this.driverForm.get('national_id');
  }
  get car_name() {
    return <FormControl>this.driverForm.get('car_name');
  }
  get bien_so() {
    return <FormControl>this.driverForm.get('bien_so');
  }
  get seat() {
    return <FormControl>this.driverForm.get('seat');
  }
  onSubmit() {
    if (this.isEditMode) {
      this.driverService.updateDriver(this.id, this.inputModel);
    } else {
      console.log(this.driverForm.value);
      console.log({ input: this.inputModel });
      this.driverService.addDriver(this.inputModel);
      this.driverForm.reset();
    }
  }

  goBack() {
    this.location.back();
  }
}
