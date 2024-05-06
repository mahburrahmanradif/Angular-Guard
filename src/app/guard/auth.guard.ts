import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router)

  let isLoggedIn = sessionStorage.getItem("isLoggedIn");

  // Check if isLoggedIn is null or 'false'
  if (isLoggedIn === null || isLoggedIn === 'false') {
    _router.navigate(['login']);
    return false;
  }

  return true;
};
