import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicReservationComponent } from './basic-reservation/basic-reservation.component';

import { BasicCalenderComponent } from './basic-calender/basic-calender.component';


const routes: Routes = [

  {
    path: 'reservation',
    component: BasicReservationComponent
  },
 
  {
    path: 'calender',
    component: BasicCalenderComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}