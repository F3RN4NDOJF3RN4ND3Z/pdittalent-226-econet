import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(public router: Router,public authService:AuthService) { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      console.log('Checking auth...');
      return new Promise(res => setTimeout(() => {
        this.authService.getAuth().onAuthStateChanged( user => {
          if (user) {
            res(true);
          } else {
            console.log('User is not logged in');
            this.router.navigate(['/login']);
            res(false);
          }
        });
        //console.log('Auth check failed');
        //this.router.navigate(['/login']);
        //res(false);
      }, 2000));
  }
}

