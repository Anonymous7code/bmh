import { Injectable } from '@angular/core';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ApiService } from './api.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('cYpheRConCeAl')) {
      return true;
    } else {
      //  EMPTY FIELD ERROR ALERT
      const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'error',
        title: 'Insufficient Permission!!',
        text: "You Don't Have Permission To View This Page,Login First!!",
      });
      return false;
    }
  }
}
