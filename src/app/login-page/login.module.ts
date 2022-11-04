import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { LoginRoute } from './login-route';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginRoute,
    FormsModule
  ],
  exports: [LoginPageComponent],
})
export class LoginModule { }
