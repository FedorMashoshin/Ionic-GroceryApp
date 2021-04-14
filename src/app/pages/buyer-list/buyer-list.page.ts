import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buyer-list',
  templateUrl: './buyer-list.page.html',
  styleUrls: ['./buyer-list.page.scss'],
})
export class BuyerListPage implements OnInit {
  products: any;
  user: any;


  constructor(
    private authService: AuthService,
    private productService: ProductService
  ) { }

  async ngOnInit() {
    this.authService.user.subscribe(res => {
      this.user = res;
    });

    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    })
  }

  signOut(){
    return this.authService.signOut();
  }
}
