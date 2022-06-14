import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';
import { Contract } from 'src/app/shared/model/contract.model';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css'],
})
export class ContractListComponent implements OnInit {
  constructor(private contractService: ContractService) {
  }

  isRecycle: boolean = false
  contracts: Contract[] = [];
  contractRecycle: Contract[] = [];

  ngOnInit(): void {
    this.contractService.getContracts().subscribe(res => (this.contracts = res as Contract[]));
    this.contractService.getContractFromRecycleBin().subscribe(res => (this.contractRecycle = res as Contract[]));
  }
  handleClickRecycle(): void {
    this.isRecycle = !this.isRecycle
  }
}
