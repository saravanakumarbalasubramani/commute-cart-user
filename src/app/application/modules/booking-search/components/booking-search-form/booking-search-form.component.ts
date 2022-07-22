import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-search-form',
  templateUrl: './booking-search-form.component.html',
  styleUrls: ['./booking-search-form.component.scss']
})
export class BookingSearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchForm = new FormGroup({
    limit: new FormControl('city')
  });

  onAutocompleteSelected(e:any) {
    console.log('onAutocompleteSelected # ' + e)
  }

  onLocationSelected(e:any) {
    console.log('onLocationSelected # ' + e)
  }

}
