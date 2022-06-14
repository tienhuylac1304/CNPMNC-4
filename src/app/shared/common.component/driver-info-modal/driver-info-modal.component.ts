import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { DriverService } from 'src/app/services/driver.service';
import { Contract } from '../../model/contract.model';
import { Driver } from '../../model/driver.model';

@Component({
    selector: 'driver-info-modal',
    templateUrl: 'driver-info-modal.component.html'
})

export class DriverInfoModal implements OnInit {
    @Input() driverId!: string
    contract!: Contract
    driver!: Driver
    constructor(
        private driverService: DriverService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        if (this.driverId) {
            this.route.params.subscribe(async (params: Params) => {
                let tempCus = await this.driverService.getDiver(this.driverId)
                this.driver = tempCus[0]
            });
            console.log(this.driverId);
        }
    }
}
