import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'badges',
    loadComponent: () =>
      import('./basic-badge/basic-badge.component').then(m => m.BasicBadgeComponent)
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./basic-button/basic-button.component').then(m => m.BasicButtonComponent)
  },
  {
    path: 'breadcrumb-paging',
    loadComponent: () =>
      import('./breadcrumb-paging/breadcrumb-paging.component').then(m => m.BreadcrumbPagingComponent)
  },
  {
    path: 'collapse',
    loadComponent: () =>
      import('./basic-collapse/basic-collapse.component').then(m => m.BasicCollapseComponent)
  },
  {
    path: 'tabs-pills',
    loadComponent: () =>
      import('./basic-tabs-pills/basic-tabs-pills.component').then(m => m.BasicTabsPillsComponent)
  },
  {
    path: 'typography',
    loadComponent: () =>
      import('./basic-typography/basic-typography.component').then(m => m.BasicTypographyComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
