import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TravelService } from 'src/app/services/travel.service';
import { CustomerService } from 'src/app/services/customer.service';
import { DriverService } from 'src/app/services/driver.service';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.css'],
})
export class TravelDetailComponent implements OnInit {
  id!: string;
  tempCar!: Travel[];
  travel!: Travel;
  customer_name?: string = ""
  driver_name: string = ""
  showingTravel: boolean = false
  constructor(
    private travelService: TravelService,
    private cusService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async (params: Params) => {
      this.id = params['id'];
      let tempTravel: Travel[] = await this.travelService.getTravel(this.id);
      this.travel = tempTravel[0];
      let tempCus = await this.cusService.getCustomer(this.travel.customer)
      this.customer_name = tempCus?.name
    });
  }

  deleteCar(): void {
    if (this.travel) {
      this.travelService.softDeleteTravel(this.id);
    }
    else {
      this.travelService.hardDeleteTravel(this.id);
    }
    this.router.navigate(['travels']);
  }
  restoreTravel(): void {
    this.travelService.restoreTravel(this.id)
  }
  showTravelInfo() {
    this.showingTravel = !this.showingTravel
  }
}
