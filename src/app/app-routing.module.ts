import { NgModule } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';
import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToDashboard = redirectLoggedInTo(['']);
const redirectToDashboardWithLogger = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) =>
  pipe(
    tap(() => console.info('it will be redirected')),
    redirectToDashboard
  );

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashbored',
    pathMatch: 'full',
  },
  {
    path: 'dashbored',
    loadChildren: () =>
      import('./modules/dashbored/dashbored.module').then(
        (m) => m.DashboredModule
      ),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    ...canActivate(redirectToDashboardWithLogger),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
