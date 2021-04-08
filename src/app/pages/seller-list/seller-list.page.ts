import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.page.html',
  styleUrls: ['./seller-list.page.scss'],
})
export class SellerListPage implements OnInit {
  products;

  constructor(
    private authService: AuthService,
    private productService: ProductService
  ) { }

  async ngOnInit() {
   (await this.productService.getSellerProduct()).subscribe(data => {
     this.products =  data;
     console.log(this.products);
   });
  }

  delete(id) {
    this.productService.deleteProduct(id);
  }

  signOut(){
    return this.authService.signOut();
  }

}
