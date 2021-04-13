import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-buyer-list-details',
  templateUrl: './buyer-list-details.page.html',
  styleUrls: ['./buyer-list-details.page.scss'],
})
export class BuyerListDetailsPage implements OnInit {
  id: any = null;
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.productService.getOneProduct(this.id).subscribe(res => {
      this.product = res;
    });
  }

}
