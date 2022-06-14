import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/common.component/navbar/navbar.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DropdownDirective } from './shared/common.component/drop-down/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverListComponent } from './components/drivers/driver-list/driver-list.component';
import { DriverListItemComponent } from './components/drivers/driver-list/driver-list-item/driver-list-item.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';
import { DriverDetailStartComponent } from './components/drivers/driver-detail-start/driver-detail-start.component';
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';
import { DriverService } from './services/driver.service';
import { ContractsComponent } from './components/contract/contracts.component';
import { ContractService } from './services/contract.service';
import { ContractListComponent } from './components/contract/contract-list/contract-list.component';
import { ContractListItemComponent } from './components/contract/contract-list/contract-list-item/contract-list-item.component';
import { ContractDetailComponent } from './components/contract/contract-detail/contract-detail.component';
import { ContractDetailStartComponent } from './components/contract/contract-detail-start/contract-detail-start.component';
import { DriverInfoModal } from './shared/common.component/driver-info-modal/driver-info-modal.component';
import { CusInfoModal } from './shared/common.component/customer-info-modal/customer-info-modal.component';
import { CustomerService } from './services/customer.service';
import { TravelService } from './services/travel.service';
import { TravelListComponent } from './components/travel/travel-list/travel-list.component';
import { TravelListItemComponent } from './components/travel/travel-list/travel-list-item/travel-list-item.component';
import { TravelsComponent } from './components/travel/travels.component';
import { TravelDetailComponent } from './components/travel/travel-detail/travel-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //Contract
    ContractListItemComponent,
    ContractsComponent,
    ContractListComponent,
    ContractDetailComponent,
    ContractDetailStartComponent,
    //Travel
    TravelListComponent,
    TravelListItemComponent,
    TravelsComponent,
    TravelDetailComponent,
    //Driver
    DriversComponent,
    DriverListComponent,
    DriverListItemComponent,
    DriverDetailComponent,
    DriverDetailStartComponent,
    DriverEditComponent,
    //DropDownList
    DropdownDirective,
    //Modal
    DriverInfoModal,
    CusInfoModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [DriverService, ContractService, CustomerService, TravelService],
  bootstrap: [AppComponent],
})
export class AppModule { }
