import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { CarService } from './services/car.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverListComponent } from './components/drivers/driver-list/driver-list.component';
import { DriverListItemComponent } from './components/drivers/driver-list/driver-list-item/driver-list-item.component';
import { DriverDetailComponent } from './components/drivers/driver-detail/driver-detail.component';
import { DriverDetailStartComponent } from './components/drivers/driver-detail-start/driver-detail-start.component';
import { DriverEditComponent } from './components/drivers/driver-edit/driver-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule { }
