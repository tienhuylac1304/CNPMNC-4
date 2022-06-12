import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { CarEditComponent } from './components/cars/car-edit/car-edit.component';
import { CarDetailStartComponent } from './components/cars/car-detail-start/car-detail-start.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailComponent } from './components/cars/car-detail/car-detail.component';
import { DriverDetailStartComponent } from './components/drivers/driver-detail-start/driver-detail-start.component';
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  {
    path: 'cars',
    component: CarsComponent,
    children: [
      { path: '', component: CarDetailStartComponent },
      { path: 'new', component: CarEditComponent },
      { path: ':id', component: CarDetailComponent },
      { path: ':id/edit', component: CarEditComponent },
    ],
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
