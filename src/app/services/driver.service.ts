import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
// import { Car } from '../shared/car.model';
import { Driver } from '../shared/model/driver.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  drivers$!: Observable<any[]>;
  drivers: any;
  tutorialsRef: AngularFirestoreCollection<Driver> = null as any;
  constructor(firestore: Firestore, private afs: AngularFirestore) {
    // const driverList = collection(firestore, 'DRIVER');
    // this.drivers$ = collectionData(driverList);
    this.drivers$ = this.afs.collection('DRIVER').valueChanges();
    this.tutorialsRef = this.afs.collection("DRIVER");
    //get document from collection
    // this.drivers$.subscribe(result => console.log(result.map((item) => (item.id))));
  }
  getDrivers() {
    // this.drivers$.subscribe(
    //   result => {
    //     result.forEach(item => {
    //       this.drivers.push(item)
    //     });
    //   })
    return new Promise<any>((resolve) => {
      this.afs.collection('DRIVER').valueChanges({ idField: 'id' }).subscribe(users => resolve(users));
    })
    // return this.drivers;
  }

  getDiver(index: string) {
    // console.log(this.drivers[index]) // id
    return new Promise<any>((resolve) => { this.afs.collection("DRIVER", ref => ref.where('id', '==', index)).valueChanges().subscribe(users => resolve(users)) })
    // return this.drivers[index];
  }

  addDriver(newDriver: Driver) {
    newDriver.id = "1"
    newDriver.driving_status = "free"
    newDriver.create_dt = (Date.now).toString()
    newDriver.status = true
    this.drivers.push(newDriver);
    this.afs.collection('DRIVER').add({ ...newDriver }).then(docRef => {
      this.afs.collection('DRIVER').doc(`${docRef.id}`).update({ ...newDriver, id: docRef.id })
    });


  }

  updateDriver(index: string, newDriver: Driver) {
    this.drivers[index] = newDriver;
    console.log(newDriver);
    this.afs.collection('DRIVER').doc(`${this.drivers[index].id}`).update(newDriver);
  }

  deleteDriver(index: string) {
    this.afs.collection('DRIVER').doc(`${this.drivers[index].id}`).delete();
    console.log(this.drivers[index].id)
    this.drivers.splice(index, 1);
  }
}
