import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBasicRoutingModule } from './ui-basic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicReservationComponent } from './basic-reservation/basic-reservation.component';
import { BasicCalenderComponent } from './basic-calender/basic-calender.component';

import { SharedModule } from 'src/app/theme/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [BasicReservationComponent,BasicCalenderComponent],
  imports: [CommonModule, UiBasicRoutingModule, FormsModule, ReactiveFormsModule,    FullCalendarModule,   SharedModule // 👈 ajoute ceci ici
  ]
})
export class UiBasicModule {}
