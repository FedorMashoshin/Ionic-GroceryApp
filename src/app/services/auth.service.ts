import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from '@firebase/app';
import '@firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireStore: AngularFirestore
  )
   { }

   signUp(credentials){
     return this.angularFireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(data => {
       console.log('SIGN_UP', data);
       return this.angularFireStore.doc(`users/${data.user.uid}`).set({
         name: credentials.name,
         email: credentials.email,
         type: credentials.type,
         created: firebase.firebase.firestore.FieldValue.serverTimestamp()
       })
     })
   }
}
