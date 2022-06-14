import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { DriverService } from 'src/app/services/driver.service';
import { Contract } from 'src/app/shared/model/contract.model';
import { Driver } from 'src/app/shared/model/driver.model';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.css'],
})
export class DriverDetailComponent implements OnInit {
  id!: string;
  car: Driver = new Driver('', '', '', 18, '', false, '', '', '', '', 1);
  tempCar!: Driver[];
  driver?: Driver;
  contracts: Contract[] = []
  constructor(
    private carService: DriverService,
    private cService: ContractService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.id = params['id'];
      let tempDriver: Driver[] = await this.carService.getDiver(this.id);
      this.driver = tempDriver[0];

      //test
      let tempContract: Contract[] = await this.cService.getContractByDriver(this.id)
      this.contracts = tempContract
    });
  }

  restoreDriver(): void {
    this.carService.restoreDriver(this.id)
  }

  deleteCar(): void {
    if (this.driver?.status)
      this.carService.softDeleteDriver(this.id);
    else
      this.carService.hardDeleteDriver(this.id);
    this.router.navigate(['drivers']);
  }
}
