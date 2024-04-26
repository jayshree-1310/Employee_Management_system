import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastrService);

  if (authService.isLoggedIn() && localStorage.getItem('role') === 'admin') {
    return true;
  } else {
    toast.warning('Invalid Credential', 'Access Denied', {
      timeOut: 3000,
      closeButton: true,
    });
    router.navigate(['login']);
    return false;
  }
};
