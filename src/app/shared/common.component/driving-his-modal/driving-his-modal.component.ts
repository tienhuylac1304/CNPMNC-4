import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Contract } from '../../model/contract.model';
import { Customer } from '../../model/customer.model';
@Component({
    selector: 'driving-his-modal',
    templateUrl: 'driving-his-modal.component.html'
})

export class DrvingHisModal implements OnInit {
    @Input() contract?: Contract[]
    @Input() driver?: string
    constructor(
        private cusService: CustomerService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {

    }
    //console.log(this.cusID)
}
