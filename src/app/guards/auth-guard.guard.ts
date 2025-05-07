import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let session:boolean = false;
  const localToken = localStorage.getItem('token');

  localToken ? session = true : session=false;

  const router:Router = inject(Router);
  const protectedRoutes: string[] = ["/painel"];
  return protectedRoutes.includes(state.url) && !session
  ? router.navigate(["/login"])
  : true;
};
