import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverDetailStartComponent } from './components/drivers/driver-detail-start/driver-detail-start.component';
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/drivers', pathMatch: 'full' },
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
