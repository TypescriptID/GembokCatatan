import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginmodulRoutingModule } from './loginmodul-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LupapasswordComponent } from './lupapassword/lupapassword.component';


@NgModule({
  declarations: [LoginpageComponent, LupapasswordComponent],
  imports: [
    CommonModule,
    LoginmodulRoutingModule
  ]
})
export class LoginmodulModule { }
