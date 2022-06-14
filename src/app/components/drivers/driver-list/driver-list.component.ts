import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from 'src/app/shared/model/driver.model';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  constructor(private driverService: DriverService) {
  }

  isRecycle: boolean = false
  drivers: Driver[] = [];
  driverCycleBin: Driver[] = [];
  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(res => (this.drivers = res as Driver[]));
    this.driverService.getDriversFromRecycleBin().subscribe(res => (this.driverCycleBin = res as Driver[]));
  }
  handleClickRecycle(): void {
    this.isRecycle = !this.isRecycle
  }
}
