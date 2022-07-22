import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSearchComponent } from './components/booking-search/booking-search.component';

const routes: Routes = [
  { path: '', component: BookingSearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingSearchRoutingModule { }
