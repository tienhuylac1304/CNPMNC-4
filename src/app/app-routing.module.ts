import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverDetailStartComponent } from './components/drivers/driver-detail-start/driver-detail-start.component';
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';
import { ContractDetailStartComponent } from './components/contract/contract-detail-start/contract-detail-start.component';
import { ContractDetailComponent } from './components/contract/contract-detail/contract-detail.component';
import { ContractsComponent } from './components/contract/contracts.component';
import { TravelsComponent } from './components/travel/travels.component';
import { TravelDetailStartComponent } from './components/travel/travel-detail-start/travel-detail-start.component';
import { TravelDetailComponent } from './components/travel/travel-detail/travel-detail.component';

const routes: Routes = [
  //default
  { path: '', redirectTo: '/drivers', pathMatch: 'full' },
  //driver
  {
    path: 'drivers',
    component: DriversComponent,
    children: [
      { path: '', component: DriverDetailStartComponent },
      { path: 'new', component: DriverEditComponent },
      { path: ':id', component: DriverDetailComponent },
      { path: ':id/edit', component: DriverEditComponent },
    ]
  },
  //contract
  {
    path: 'contracts',
    component: ContractsComponent,
    children: [
      { path: '', component: ContractDetailStartComponent },
      { path: ':id', component: ContractDetailComponent },
    ]
  },
  //travel
  {
    path: 'travels',
    component: TravelsComponent,
    children: [
      { path: '', component: TravelDetailStartComponent },
      { path: ':id', component: TravelDetailComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
