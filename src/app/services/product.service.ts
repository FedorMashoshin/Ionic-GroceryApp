import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) { }

  public async addProduct(product){
    product.creator = (await this.angularFireAuth.currentUser).uid
    return this.angularFireStore.collection('products').add(product);
  }
}
