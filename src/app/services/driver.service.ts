import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
// import { Car } from '../shared/car.model';
import { Driver } from '../shared/model/driver.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  drivers$!: Observable<any[]>;
  drivers: any;
  constructor(private afs: AngularFirestore) {
    // const driverList = collection(firestore, 'DRIVER');
    // this.drivers$ = collectionData(driverList);
    this.drivers$ = this.afs.collection('DRIVER', ref => ref.orderBy('name', 'desc')).valueChanges();
  }
  getDrivers() {
    return this.afs.collection('DRIVER', ref => ref.where('status', '==', true)).valueChanges();
    // return this.drivers;
  }
  getDriversFromRecycleBin() {
    return this.afs.collection('DRIVER', ref => ref.where('status', '==', false)).valueChanges();
    // return this.drivers;
  }

  getDiver(index: string) {
    // console.log(this.drivers[index]) // id
    return new Promise<any>((resolve) => { this.afs.collection("DRIVER", ref => ref.where('id', '==', index)).valueChanges().subscribe(users => resolve(users)) })
    // return this.drivers[index];
  }

  addDriver(newDriver: Driver) {
    const currentDate = new Date();
    newDriver.id = "1"
    newDriver.driving_status = "free"
    newDriver.create_dt = formatDate(currentDate, 'dd/MM/YYYY', 'en-US')
    const create_dt_time = formatDate(currentDate, 'hh:mm', 'en-US');
    newDriver.create_dt_time = create_dt_time
    newDriver.status = true
    // console.log({ newDriver: newDriver })
    this.afs.collection('DRIVER').add({ ...newDriver }).then(docRef => {
      this.afs.collection('DRIVER').doc(`${docRef.id}`).update({ ...newDriver, id: docRef.id })
    });
  }

  updateDriver(index: string, newDriver: Driver) {
    // this.drivers[index] = newDriver;
    // console.log(index)
    // console.log(newDriver);
    this.afs.collection('DRIVER').doc(index).update(newDriver);
  }

  hardDeleteDriver(index: string) {
    this.afs.collection('DRIVER').doc(`${index}`).delete();
  }

  softDeleteDriver(index: string) {
    this.afs.collection('DRIVER').doc(index).update({ 'status': false });
  }

  restoreDriver(index: string) {
    this.afs.collection('DRIVER').doc(index).update({ 'status': true });
  }
}
