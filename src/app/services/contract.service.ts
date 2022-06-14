import { Injectable } from '@angular/core';
// import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
// import { Car } from '../shared/car.model';
import { Contract } from '../shared/model/contract.model';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  contracts$!: Observable<any[]>;
  contracts: any;
  constructor(private afs: AngularFirestore) {
    // const driverList = collection(firestore, 'CONTRACT');
    // this.contracts$ = collectionData(driverList);
    this.contracts$ = this.afs.collection('CONTRACT', ref => ref.orderBy('name', 'desc')).valueChanges();
  }
  getContracts() {
    return this.afs.collection('CONTRACT', ref => ref.where('status', '==', true)).valueChanges();
    // return this.contracts;
  }
  getContractFromRecycleBin() {
    return this.afs.collection('CONTRACT', ref => ref.where('status', '==', false)).valueChanges();
    // return this.contracts;
  }

  getContract(index: string) {
    // console.log(this.contracts[index]) // id
    return new Promise<any>((resolve) => { this.afs.collection("CONTRACT", ref => ref.where('id', '==', index)).valueChanges().subscribe(users => resolve(users)) })
    // return this.contracts[index];
  }
  getContractByDriver(index: string) {
    return new Promise<any>((resolve) => { this.afs.collection("CONTRACT", ref => ref.where('driver', '==', index)).valueChanges().subscribe(users => resolve(users)) })
  }

  /*addContract(newContract: Contract) {
    const currentDate = new Date();
    newContract.id = "1"
    newContract.driving_status = "free"
    newContract.create_dt = formatDate(currentDate, 'dd/MM/YYYY', 'en-US')
    const create_dt_time = formatDate(currentDate, 'hh:mm', 'en-US');
    newContract.create_dt_time = create_dt_time
    newContract.status = true
    // console.log({ newContract: newContract })
    this.afs.collection('CONTRACT').add({ ...newContract }).then(docRef => {
      this.afs.collection('CONTRACT').doc(`${docRef.id}`).update({ ...newContract, id: docRef.id })
    });
  }*/

  /*updateContract(index: string, newContract: Contract) {
    // this.contracts[index] = newContract;
    // console.log(index)
    // console.log(newContract);
    this.afs.collection('CONTRACT').doc(index).update(newContract);
  }*/

  hardDeleteContract(index: string) {
    this.afs.collection('CONTRACT').doc(`${index}`).delete();
  }

  softDeleteContract(index: string) {
    this.afs.collection('CONTRACT').doc(index).update({ 'status': false });
  }

  restoreContract(index: string) {
    this.afs.collection('CONTRACT').doc(index).update({ 'status': true });
  }
}
