import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiBasicRoutingModule } from './ui-basic-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicBadgeComponent } from './basic-badge/basic-badge.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { BasicCollapseComponent } from './basic-collapse/basic-collapse.component';
import { BreadcrumbPagingComponent } from './breadcrumb-paging/breadcrumb-paging.component';
import { BasicTabsPillsComponent } from './basic-tabs-pills/basic-tabs-pills.component';
import { BasicTypographyComponent } from './basic-typography/basic-typography.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [BasicBadgeComponent,BasicButtonComponent,BasicCollapseComponent,BreadcrumbPagingComponent,BasicTabsPillsComponent,BasicTypographyComponent],
  imports: [CommonModule, UiBasicRoutingModule, FormsModule, ReactiveFormsModule,    SharedModule // 👈 ajoute ceci ici
  ]
})
export class UiBasicModule {}
