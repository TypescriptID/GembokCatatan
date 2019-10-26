import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginmodulRoutingModule } from './loginmodul-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LupapasswordComponent } from './lupapassword/lupapassword.component';
import { KeteranganPasswordComponent } from './keterangan-password/keterangan-password.component';
import { GeneratorPasswordComponent } from './generator-password/generator-password.component';


@NgModule({
  declarations: [LoginpageComponent, LupapasswordComponent, KeteranganPasswordComponent, GeneratorPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginmodulRoutingModule
  ]
})
export class LoginmodulModule { }
