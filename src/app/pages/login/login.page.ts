import { AuthService } from './../../services/auth.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;

  @ViewChild('flipcontainer') flipcontainer: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', Validators.required],
      type: ['BUYER', Validators.required]
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  navigateByType(type){
    if (type === 'BUYER'){
      this.router.navigateByUrl('/buyer');
    }
    else if (type === 'SELLER'){
      this.router.navigateByUrl('/seller');
    }
  }

  async login(){
    let loading = await this.loadingCtrl.create({
      message: `Logging you in...`
    });
    await loading.present();
    this.authService.signIn(this.loginForm.value).subscribe(user => {
      loading.dismiss();
      this.loginForm.reset();
      this.navigateByType(user['type']);
    },
    async err => {
      await loading.dismiss();
      
      let toast = await this.toastCtrl.create({
        position: 'top',
        color: 'danger',
        duration: 4000,
        message: err.message
      });
      toast.present();
    })
  }

  async register(){
    let loading = await this.loadingCtrl.create({
      message: `Creating your new account, ${this.registerForm.value.name}`
    });
    await loading.present();
    this.authService.signUp(this.registerForm.value).then(
      async res => {
      await loading.dismiss();
      await this.registerForm.reset();
      
      let toast = await this.toastCtrl.create({
        position: 'top',
        color: 'success',
        duration: 3000,
        message: `Your account has been created!`
      });
      toast.present();
      this.navigateByType(this.registerForm.value['type']);
    },
    async err => {
      await loading.dismiss();
      
      let toast = await this.toastCtrl.create({
        position: 'top',
        color: 'danger',
        duration: 4000,
        message: err.message
      });
      toast.present();
    })
  }

  toggleRegister(){
    this.flipcontainer.nativeElement.classList.toggle('flip');
  }
}
