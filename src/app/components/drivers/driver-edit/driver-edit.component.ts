import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from 'src/app/shared/model/driver.model';

@Component({
  selector: 'app-driver-edit',
  templateUrl: './driver-edit.component.html',
  styleUrls: ['./driver-edit.component.css'],
})
export class DriverEditComponent implements OnInit {
  id!: string;
  isEditMode = false;
  driverForm!: FormGroup

  constructor(
    private driverService: DriverService,
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
<<<<<<< HEAD
    this.inputModel = new Driver("", "", "", 18, "", false, "", "", "", "", 1)
    if (this.isEditMode) {
      const driver = await this.driverService.getDiver(this.id);
      driver ? this.inputModel = driver[0] : this.inputModel
=======
    let name = ""
    let national_id = ""
    let age = 0
    let car_name = ""
    let bien_so = ""
    let seat = 0
    if (this.isEditMode) {
      const driver: Driver = await this.driverService.getDiver(this.id);
      name = driver.name
      national_id = driver.national_id
      age = driver.age
      car_name = driver.car_name
      bien_so = driver.bien_so
      seat = driver.seat
>>>>>>> origin/tienhuy
    }
    this.driverForm = new FormGroup({
      //driver
      name: new FormControl(name, Validators.required),
      age: new FormControl(age, Validators.required),
      national_id: new FormControl(national_id, Validators.required),
      //car
      car_name: new FormControl(car_name, Validators.required),
      bien_so: new FormControl(bien_so, Validators.required),
      seat: new FormControl(seat, Validators.required)
    });
  }
  get name() {
    return <FormControl>this.driverForm.get('name');
  }
  get national_id() {
    return <FormControl>this.driverForm.get('national_id');
  }
  get age() {
    return <FormControl>this.driverForm.get('age');
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
<<<<<<< HEAD
      const newDriver = { ...this.inputModel, ...this.driverForm.value, }
      // console.log({ newDriver })
      this.driverService.updateDriver(this.id, newDriver);
    } else {
      const newDriver = { ...this.inputModel, ...this.driverForm.value, }
      // console.log({ input: newDriver });
      this.driverService.addDriver(newDriver);
=======
      this.driverService.updateDriver(this.id, this.driverForm.value);
    } else {
      console.log(this.driverForm.value);
      this.driverService.addDriver(this.driverForm.value);
>>>>>>> origin/tienhuy
      this.driverForm.reset();
    }
  }

  goBack() {
    this.location.back();
  }
}
