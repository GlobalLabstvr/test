import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  searchUsersByName(value: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

 // updateUser(userKey, value){
   // value.nameToSearch = value.name.toLowerCase();
   // return this.db.collection('users').doc(userKey).set(value);
  //}

  //deleteUser(userKey){
    //return this.db.collection('users').doc(userKey).delete();
  //}

  getUsers(){
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  createUser(value, avatar){
    return this.db.collection('users').add({
      firstName: value.firstName,
      nameToSearch: value.name.toLowerCase(),
      lastName: value.lastName,
      dateofbirth: parseInt(value.dateofbirth),
      avatar: avatar
    });
  }
}


  