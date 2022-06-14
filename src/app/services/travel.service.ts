import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
// import { Car } from '../shared/car.model';
import { Travel } from '../shared/model/travel.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class TravelService {
    travels$!: Observable<any[]>;
    travels: any;
    constructor(private afs: AngularFirestore) {
        // const driverList = collection(firestore, 'TRAVEL');
        // this.travels$ = collectionData(driverList);
        this.travels$ = this.afs.collection('TRAVEL', ref => ref.orderBy('name', 'desc')).valueChanges();
    }
    getTravels() {
        return this.afs.collection('TRAVEL', ref => ref.where('status', '==', true)).valueChanges();
        // return this.travels;
    }
    getTravelFromRecycleBin() {
        return this.afs.collection('TRAVEL', ref => ref.where('status', '==', false)).valueChanges();
        // return this.travels;
    }

    getTravel(index: string) {
        // console.log(this.travels[index]) // id
        return new Promise<any>((resolve) => { this.afs.collection("TRAVEL", ref => ref.where('id', '==', index)).valueChanges().subscribe(users => resolve(users)) })
        // return this.travels[index];
    }

    /*addTravel(newTravel: Travel) {
      const currentDate = new Date();
      newTravel.id = "1"
      newTravel.driving_status = "free"
      newTravel.create_dt = formatDate(currentDate, 'dd/MM/YYYY', 'en-US')
      const create_dt_time = formatDate(currentDate, 'hh:mm', 'en-US');
      newTravel.create_dt_time = create_dt_time
      newTravel.status = true
      // console.log({ newTravel: newTravel })
      this.afs.collection('TRAVEL').add({ ...newTravel }).then(docRef => {
        this.afs.collection('TRAVEL').doc(`${docRef.id}`).update({ ...newTravel, id: docRef.id })
      });
    }*/

    /*updateTravel(index: string, newTravel: Travel) {
      // this.travels[index] = newTravel;
      // console.log(index)
      // console.log(newTravel);
      this.afs.collection('TRAVEL').doc(index).update(newTravel);
    }*/

    hardDeleteTravel(index: string) {
        this.afs.collection('TRAVEL').doc(`${index}`).delete();
    }

    softDeleteTravel(index: string) {
        this.afs.collection('TRAVEL').doc(index).update({ 'status': false });
    }

    restoreTravel(index: string) {
        this.afs.collection('TRAVEL').doc(index).update({ 'status': true });
    }
}
