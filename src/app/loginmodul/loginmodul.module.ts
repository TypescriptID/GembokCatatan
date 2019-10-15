import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginmodulRoutingModule } from './loginmodul-routing.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LupapasswordComponent } from './lupapassword/lupapassword.component';


@NgModule({
  declarations: [LoginpageComponent, LupapasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginmodulRoutingModule
  ]
})
export class LoginmodulModule { }
