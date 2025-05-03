import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/auth/signin',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component').then((c) => c.DashboardComponent)
      },
      {
        path: 'client',
        loadChildren: () => import('./demo/client/ui-basic.module').then((m) => m.UiBasicModule)
      },
     
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then((m) => m.TablesModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./demo/pages/users/users.module').then((m) => m.UsersModule)
      },
  
      {
        path: 'profile',
        loadChildren: () => import('./demo/pages/profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),  
      MatSnackBarModule
    , HttpClientModule, 
    ReactiveFormsModule  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
