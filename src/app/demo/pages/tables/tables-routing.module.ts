import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import TblBootstrapComponent from './tbl-bootstrap/tbl-bootstrap.component';

const routes: Routes = [
  {
    path: 'bootstrap',
    component: TblBootstrapComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
