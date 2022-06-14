import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
// import { Car } from '../shared/car.model';
import { DrivingStatus } from '../shared/model/driving_status.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class DrivingStatusService {
  lstDrivingStatus$!: Observable<any[]>;
  lstDrivingStatus: any;
  constructor(private afs: AngularFirestore) {
    // const driverList = collection(firestore, 'DRIVING_STATUS');
    // this.lstDrivingStatus$ = collectionData(driverList);
    this.lstDrivingStatus$ = this.afs.collection('DRIVING_STATUS', ref => ref.orderBy('name', 'desc')).valueChanges();
  }
  getLstDrivingStatus() {
    return this.afs.collection('DRIVING_STATUS', ref => ref.where('status', '==', true)).valueChanges();
    // return this.lstDrivingStatus;
  }
  getDrivingStatusFromRecycleBin() {
    return this.afs.collection('DRIVING_STATUS', ref => ref.where('status', '==', false)).valueChanges();
    // return this.lstDrivingStatus;
  }

  getDrivingStatus(index: string) {
    // console.log(this.lstDrivingStatus[index]) // id
    return new Promise<any>((resolve) => { this.afs.collection("DRIVING_STATUS", ref => ref.where('id', '==', index)).valueChanges().subscribe(users => resolve(users)) })
    // return this.lstDrivingStatus[index];
  }

  addDrivingStatus(newDrivingStatus: DrivingStatus) {
    const currentDate = new Date();
    newDrivingStatus.id = "1"
    // console.log({ newDrivingStatus: newDrivingStatus })
    this.afs.collection('DRIVING_STATUS').add({ ...newDrivingStatus }).then(docRef => {
      this.afs.collection('DRIVING_STATUS').doc(`${docRef.id}`).update({ ...newDrivingStatus, id: docRef.id })
    });
  }

  updateDrivingStatus(index: string, newDrivingStatus: DrivingStatus) {
    // this.lstDrivingStatus[index] = newDrivingStatus;
    // console.log(index)
    // console.log(newDrivingStatus);
    this.afs.collection('DRIVING_STATUS').doc(index).update(newDrivingStatus);
  }

  hardDeleteDrivingStatus(index: string) {
    this.afs.collection('DRIVING_STATUS').doc(`${index}`).delete();
  }

  softDeleteDrivingStatus(index: string) {
    this.afs.collection('DRIVING_STATUS').doc(index).update({ 'status': false });
  }

  restoreDrivingStatus(index: string) {
    this.afs.collection('DRIVING_STATUS').doc(index).update({ 'status': true });
  }
}
