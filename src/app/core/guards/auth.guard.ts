import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const toast = inject(ToastrService);
  if (authService.isLoggedIn()) {
    return true;
  } else {
    toast.warning('Please Login First', 'To Access Content', {
      timeOut: 3000,
      closeButton: true,
    });
    router.navigate(['login']);
    return false;
  }
};
