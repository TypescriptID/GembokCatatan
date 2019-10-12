import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'masuk-login',
    loadChildren: () => import('./loginmodul/loginmodul.module').then(module => module.LoginmodulModule),
  },
  {
    path: '',
    redirectTo: '/masuk-login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/masuk-login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
