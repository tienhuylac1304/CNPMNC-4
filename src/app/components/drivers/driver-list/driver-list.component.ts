import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { Driver } from 'src/app/shared/model/driver.model';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
})
export class DriverListComponent implements OnInit {
  constructor(private driverService: DriverService) { }

  drivers: Driver[] = [];

  ngOnInit(): void {
    this.drivers = this.driverService.getDrivers();
  }
}
