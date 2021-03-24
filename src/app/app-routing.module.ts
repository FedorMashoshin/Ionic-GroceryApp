import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'buyer-list-details',
    loadChildren: () => import('./pages/buyer-list-details/buyer-list-details.module').then( m => m.BuyerListDetailsPageModule)
  },
  {
    path: 'buyer-list',
    loadChildren: () => import('./pages/buyer-list/buyer-list.module').then( m => m.BuyerListPageModule)
  },
  {
    path: 'seller-list-details',
    loadChildren: () => import('./pages/seller-list-details/seller-list-details.module').then( m => m.SellerListDetailsPageModule)
  },
  {
    path: 'seller-list',
    loadChildren: () => import('./pages/seller-list/seller-list.module').then( m => m.SellerListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
