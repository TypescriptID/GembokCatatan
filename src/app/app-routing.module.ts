import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'masuk-login',
    loadChildren: () => import('./loginmodul/loginmodul.module').then(module => module.LoginmodulModule),
  },
  {
    path: 'catatan',
    loadChildren: () => import('./daftar-catatan/daftar-catatan.module').then(module => module.DaftarCatatanModule),
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
