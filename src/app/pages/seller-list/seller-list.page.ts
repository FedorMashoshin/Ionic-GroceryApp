import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.page.html',
  styleUrls: ['./seller-list.page.scss'],
})
export class SellerListPage implements OnInit {
  products;
  user: any;

  constructor(
    private authService: AuthService,
    private productService: ProductService,
    private alertCtrl: AlertController
  ) { }

  async ngOnInit() {
    this.authService.user.subscribe(res => {
      this.user = res;
    });

   (await this.productService.getSellerProduct()).subscribe(data => {
     this.products =  data;
     console.log(this.products);
   });
  }

  async delete(id) {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure you want to delete this item?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
        }, {
          text: 'Delete',
          handler: () => {
            this.productService.deleteProduct(id);
          }
        }
      ]
    });

    await alert.present();
  }

  signOut(){
    return this.authService.signOut();
  }

}
