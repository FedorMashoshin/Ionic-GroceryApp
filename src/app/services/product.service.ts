import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private storage: AngularFireStorage
  ) { }

  public getAllProducts(){
    return this.angularFireStore.collection('products').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data }
      }))
    )
  }

  public getOneProduct(id){
    return this.angularFireStore.doc(`products/${id}`).valueChanges();
  }

  public async addProduct(product){
    product.creator = (await this.angularFireAuth.currentUser).uid;
    const imageData = product.img;
    delete product.image;

    let documentId = null;
    let storageRef: AngularFireStorageReference = null;

    return this.angularFireStore.collection('products').add(product).then(ref => {
      console.log('ref: ', ref);
      documentId = ref.id;
      storageRef = this.storage.ref(`products/${documentId}`);
      const uploadTask = from(storageRef.putString(imageData, 'base64', { contentType: 'image/png' }));
      return uploadTask.pipe(
        switchMap(obj => {
          return obj.ref.getDownloadURL();
        }),
        switchMap(imageUrl => {
          return this.angularFireStore.doc(`products/${documentId}`).update({ img: imageUrl })
        })
      );
    })
    // .then(task => {
    //   console.log('TASK: ', task);
    //   return storageRef.getDownloadURL().toPromise()
    // }).then(imageUrl => {
    //   console.log('URL: ', imageUrl);
    //   return this.angularFireStore.doc(`products/${documentId}`).update({ img: imageUrl });
    // });
  }

  public async getSellerProduct(){
    const id = (await this.angularFireAuth.currentUser).uid;
    return this.angularFireStore.collection('products', ref => ref.where('creator', '==', id)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data }
      }))
    )
  }

  public deleteProduct(id): void{
    this.angularFireStore.doc(`products/${id}`).delete();
    this.storage.ref(`products/${id}`).delete().subscribe(res => {});
  }
}
