import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.page.html',
  styleUrls: ['./buyer-list.page.scss'],
})
export class BuyerListPage implements OnInit {
  products: any;
  uid: string = null;
  user: any;


  constructor(
    private angularFireStore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService,
    private productService: ProductService
  ) { }

  async ngOnInit() {
    this.uid = (await this.angularFireAuth.currentUser).uid;
      this.angularFireStore.doc(`users/${this.uid}`).get().subscribe(i => {
        this.user = i.data();
    });

    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
      console.warn(this.products)
    })
  }

  signOut(){
    return this.authService.signOut();
  }
}
