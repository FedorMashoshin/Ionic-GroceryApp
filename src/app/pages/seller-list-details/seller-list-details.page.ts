import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-list-details',
  templateUrl: './seller-list-details.page.html',
  styleUrls: ['./seller-list-details.page.scss'],
})
export class SellerListDetailsPage implements OnInit {

  productForm: FormGroup;
  productImageBase64: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private navCtrl: NavController,
    private camera: Camera
  ) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      img: ''
    })
  }

  createProduct(){
    this.productService.addProduct(this.productForm.value).then(res => {
      this.navCtrl.navigateBack('/seller/list');
    })
  }


  public selectImage(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: 0,
      mediaType: 0,
      sourceType: 1,
      correctOrientation: true
    }
    this.camera.getPicture(options).then(data => {
      console.log(data);
      this.productImageBase64 = 'data:image/jpeg;base64,' + data;
      this.productForm.patchValue({ img: data })
    },
     (err) => {
       this.productImageBase64 = `https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg`;
       this.productForm.patchValue({ img: this.productImageBase64 })
       console.warn(this.productForm);
     });
  }
}
