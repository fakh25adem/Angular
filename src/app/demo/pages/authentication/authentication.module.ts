import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthSigninComponent } from './auth-signin/auth-signin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthSignupComponent, AuthSigninComponent,],
  imports: [CommonModule, AuthenticationRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule  // Ajouter HttpClientModule dans les imports

  ]
})
export class AuthenticationModule { }
