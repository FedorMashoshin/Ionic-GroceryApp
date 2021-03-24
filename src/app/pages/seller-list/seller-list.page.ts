import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.page.html',
  styleUrls: ['./seller-list.page.scss'],
})
export class SellerListPage implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  signOut(){
    return this.authService.signOut();
  }

}
