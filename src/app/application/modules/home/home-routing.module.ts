import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent, runGuardsAndResolvers: 'always', 
    children: [
      { 
        path: '', loadChildren: () => import('../booking-search/booking-search.module').then(m => m.BookingSearchModule) 
      },
      {
        path: 'login', loadChildren: () => import('../login/login.module').then(m => m.LoginModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
