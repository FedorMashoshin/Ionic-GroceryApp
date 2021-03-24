import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TypeGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const expectedType = route.data.type;
    return this.authService.user.pipe(
      take(1),
      map(user => {
        if (!user) {
          return false;
        } else {
            const type = user['type'];
            if (expectedType === type){
              console.warn('YES');
              return true;
            } else {
              this.router.navigateByUrl('/')
            }
          }
      })
      )
  }
  
}
