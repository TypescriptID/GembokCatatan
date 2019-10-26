import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LupapasswordComponent } from './lupapassword/lupapassword.component';
import { GeneratorPasswordComponent } from './generator-password/generator-password.component';


const routes: Routes = [
  {
    path: '',
    component: LoginpageComponent,
  },
  {
    path: 'lupa-password',
    component: LupapasswordComponent,
  },
  {
    path: 'password-generator',
    component: GeneratorPasswordComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginmodulRoutingModule { }
