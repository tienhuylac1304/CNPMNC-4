import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { TravelService } from 'src/app/services/travel.service';
import { Contract } from 'src/app/shared/model/contract.model';
import { Travel } from 'src/app/shared/model/travel.model';

@Component({
  selector: 'app-contract-list-item',
  templateUrl: './contract-list-item.component.html',
  styleUrls: ['./contract-list-item.component.css'],
})
export class ContractListItemComponent implements OnInit {
  constructor(private travelService: TravelService,
    private cusService: CustomerService,
    private route: ActivatedRoute,
    private router: Router,) { }
  @Input() contract!: Contract;
  @Input() index!: number;
  travels!: Travel[]
  travel!: Travel
  customer_name: string = ""
  ngOnInit(): void {
    // this.travelService.getTravels().subscribe(res => (this.travels = res as Travel[]));
    // let tempCus = this.cusService.getCustomer(this.contract.driver)
    // if (tempCus) {
    //   this.customer_name = tempCus?.name
    // }
  }
}
