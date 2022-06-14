import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../model/customer.model';
@Component({
    selector: 'customer-info-modal',
    templateUrl: 'customer-info-modal.component.html'
})

export class CusInfoModal implements OnInit {
    customer?: Customer
    @Input() cusID: string = ""
    constructor(
        private cusService: CustomerService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {

        if (this.cusID) {
            this.route.params.subscribe(async (params: Params) => {
                let tempCus = await this.cusService.getCustomer(this.cusID)
                this.customer = tempCus
            });
        }
        //console.log(this.cusID)
    }
}
