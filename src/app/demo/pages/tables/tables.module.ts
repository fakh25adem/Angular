import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import TblBootstrapComponent from './tbl-bootstrap/tbl-bootstrap.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [TblBootstrapComponent],
  imports: [CommonModule, TablesRoutingModule,FormsModule, ReactiveFormsModule, FullCalendarModule,]
})
export class TablesModule {}
