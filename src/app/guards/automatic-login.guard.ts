import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutomaticLoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          return true;
        } else {
            const type = user['type'];
            if (type === 'BUYER'){
              this.router.navigateByUrl('/buyer')
            } else if (type === 'SELLER') {
              this.router.navigateByUrl('/seller')
            }
            return false;
          }
      })
      )
  }
  
}
