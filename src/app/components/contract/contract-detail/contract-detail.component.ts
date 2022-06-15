import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { CustomerService } from 'src/app/services/customer.service';
import { DriverService } from 'src/app/services/driver.service';
import { TravelService } from 'src/app/services/travel.service';
import { Contract } from 'src/app/shared/model/contract.model';
import { Driver } from 'src/app/shared/model/driver.model';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.css'],
})
export class ContractDetailComponent implements OnInit {
  id!: string;
  tempCar!: Contract[];
  contract?: Contract;
  travel!: Travel
  customer_name?: string = ""
  driver_name: string = ""
  showingTravel: boolean = false
  constructor(
    private contractService: ContractService,
    private travelService: TravelService,
    private driverService: DriverService,
    private cusService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.id = params['id'];
      let tempContract: Contract[] = await this.contractService.getContract(this.id);
      this.contract = tempContract[0];
      let tempTravel = await this.travelService.getTravel(this.contract.travel)
      this.travel = tempTravel[0];
      let tempDriver: Driver[] = await this.driverService.getDiver(this.contract.driver)
      this.driver_name = tempDriver[0].name
      let tempCus = await this.cusService.getCustomer(this.travel.customer)
      this.customer_name = tempCus?.name
    });
  }

  deleteCar(): void {
    if (this.contract) {
      if (this.contract.status) {
        this.contractService.softDeleteContract(this.id);
        this.travelService.softDeleteTravel(this.contract.travel)
      }
      else {
        this.contractService.hardDeleteContract(this.id);
        this.travelService.hardDeleteTravel(this.contract.travel)
      }
    }
    this.router.navigate(['contracts']);
  }
  restoreContract(): void {
    if (this.contract) {
      this.contractService.restoreContract(this.id)
      this.travelService.restoreTravel(this.contract?.travel)
    }
  }
  showTravelInfo() {
    this.showingTravel = !this.showingTravel
  }
}
