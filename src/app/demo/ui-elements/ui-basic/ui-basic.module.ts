import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBasicRoutingModule } from './ui-basic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiBasicRoutingModule, FormsModule, ReactiveFormsModule,]
})
export class UiBasicModule {}
