import { CanActivateChildFn, CanActivateFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (route, state) => {
  return true;
};
