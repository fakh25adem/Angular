import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './listUser/users.component';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Pour utiliser [formGroup]
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule 
  ]
})
export class UsersModule { }
