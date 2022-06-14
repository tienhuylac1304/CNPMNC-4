import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
// import { Car } from '../shared/car.model';
import { RunningStatus } from '../shared/model/running_status.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class RunningStatusService {
  lstRunningStatus$!: Observable<any[]>;
  lstRunningStatus: any;
  constructor(private afs: AngularFirestore) {
    // const driverList = collection(firestore, 'RUNNING_STATUS');
    // this.lstRunningStatus$ = collectionData(driverList);
    this.lstRunningStatus$ = this.afs.collection('RUNNING_STATUS', ref => ref.orderBy('name', 'desc')).valueChanges();
  }
  getLstRunningStatus() {
    return this.afs.collection('RUNNING_STATUS', ref => ref.where('status', '==', true)).valueChanges();
    // return this.lstRunningStatus;
  }
  getRunningStatusFromRecycleBin() {
    return this.afs.collection('RUNNING_STATUS', ref => ref.where('status', '==', false)).valueChanges();
    // return this.lstRunningStatus;
  }

  getRunningStatus(index: string) {
    // console.log(this.lstRunningStatus[index]) // id
    return new Promise<any>((resolve) => { this.afs.collection("RUNNING_STATUS", ref => ref.where('id', '==', index)).valueChanges().subscribe(users => resolve(users)) })
    // return this.lstRunningStatus[index];
  }

  addRunningStatus(newRunningStatus: RunningStatus) {
    const currentDate = new Date();
    newRunningStatus.id = "1"
    // console.log({ newRunningStatus: newRunningStatus })
    this.afs.collection('RUNNING_STATUS').add({ ...newRunningStatus }).then(docRef => {
      this.afs.collection('RUNNING_STATUS').doc(`${docRef.id}`).update({ ...newRunningStatus, id: docRef.id })
    });
  }

  updateRunningStatus(index: string, newRunningStatus: RunningStatus) {
    // this.lstRunningStatus[index] = newRunningStatus;
    // console.log(index)
    // console.log(newRunningStatus);
    this.afs.collection('RUNNING_STATUS').doc(index).update(newRunningStatus);
  }

  hardDeleteRunningStatus(index: string) {
    this.afs.collection('RUNNING_STATUS').doc(`${index}`).delete();
  }

  softDeleteRunningStatus(index: string) {
    this.afs.collection('RUNNING_STATUS').doc(index).update({ 'status': false });
  }

  restoreRunningStatus(index: string) {
    this.afs.collection('RUNNING_STATUS').doc(index).update({ 'status': true });
  }
}
