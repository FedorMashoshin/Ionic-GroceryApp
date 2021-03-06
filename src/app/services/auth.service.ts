import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from '@firebase/app';
import '@firebase/firestore';
import { NavController } from '@ionic/angular';
import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>; 
  
  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFireStore: AngularFirestore,
    private navCtrl: NavController
  )
   { 
     this.user = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFireStore.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
     )
   }

   signIn(credentials): Observable<any>{
    //  By default return promise. We change it to return observable
    return from(this.angularFireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(
      switchMap(user => {
        if (user) {
          return this.angularFireStore.doc(`users/${user.user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    )
   }

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

   signOut(){
     this.angularFireAuth.signOut().then(() => {
      this.navCtrl.navigateRoot('/')
     })
   }
}
