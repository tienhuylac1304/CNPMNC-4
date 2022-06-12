import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { CarService } from './services/car.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './components/cars/cars.component';
import { CarListComponent } from './components/cars/car-list/car-list.component';
import { CarDetailComponent } from './components/cars/car-detail/car-detail.component';
import { CarListItemComponent } from './components/cars/car-list/car-list-item/car-list-item.component';
import { CarDetailStartComponent } from './components/cars/car-detail-start/car-detail-start.component';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';
import { DriverListComponent } from './components/drivers/driver-list/driver-list.component';
import { DriverListItemComponent } from './components/drivers/driver-list/driver-list-item/driver-list-item.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';
import { DriverDetailStartComponent } from './components/drivers/driver-detail-start/driver-detail-start.component';
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    //Car
    CarsComponent,
    CarListComponent,
    CarDetailComponent,
    CarListItemComponent,
    CarDetailStartComponent,
    CarEditComponent,
    //Driver
    DriversComponent,
    DriverListComponent,
    DriverListItemComponent,
    DriverDetailComponent,
    DriverDetailStartComponent,
    DriverEditComponent,
    //DropDownList
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule { }
