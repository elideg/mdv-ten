import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private route: Router,
    private authService: AuthService
  ) { }

  canActivate(): boolean {
    if(!this.authService.isAuthenticated$.value) {
      this.route.navigate(['/login'])
      return false
    } else {
      return true
    }
  }
}
