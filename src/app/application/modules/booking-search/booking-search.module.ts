import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingSearchRoutingModule } from './booking-search-routing.module';
import { BookingSearchComponent } from './components/booking-search/booking-search.component';
import { BookingSearchFormComponent } from './components/booking-search-form/booking-search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';


@NgModule({
  declarations: [
    BookingSearchComponent,
    BookingSearchFormComponent
  ],
  imports: [
    CommonModule,
    BookingSearchRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAiIV22v53WiApak74o-WtbYXA98iOWSRs',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ]
})
export class BookingSearchModule { }
