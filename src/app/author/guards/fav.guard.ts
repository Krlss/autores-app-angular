import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';

export const favGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  const router = inject(Router);

  if (!authService.auth()) {
    return router.createUrlTree(['/auth/login']);
  }

  return true;
};
