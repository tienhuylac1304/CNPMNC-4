import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { TravelService } from 'src/app/services/travel.service';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'app-travel-list-item',
  templateUrl: './travel-list-item.component.html',
  styleUrls: ['./travel-list-item.component.css'],
})
export class TravelListItemComponent implements OnInit {
  constructor(private travelService: TravelService,
    private cusService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,) { }
  @Input() travel!: Travel;
  @Input() index!: number;
  travels!: Travel[]
  customer_name: string = ""
  ngOnInit(): void {
    this.travelService.getTravels().subscribe(res => (this.travels = res as Travel[]));
    let tempCus = this.cusService.getCustomer(this.travel.customer)
    if (tempCus) {
      this.customer_name = tempCus?.name
    }

  }
}
