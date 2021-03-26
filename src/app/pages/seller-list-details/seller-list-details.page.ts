import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-list-details',
  templateUrl: './seller-list-details.page.html',
  styleUrls: ['./seller-list-details.page.scss'],
})
export class SellerListDetailsPage implements OnInit {

  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      img: ''
    })
  }

  createProduct(){}

}
