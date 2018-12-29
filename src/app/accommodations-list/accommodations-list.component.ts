import { Component, OnInit,Inject } from '@angular/core';
import {Accommodation} from '../models/accommodation';
import { flyInOut, expand } from '../animations/app.animation';
import {ACCOMMODATIONS} from '../data/accommodations';
import {AccommodationService} from '../services/accommodation.service';

@Component({
  selector: 'app-accommodations-list',
  templateUrl: './accommodations-list.component.html',
  styleUrls: ['./accommodations-list.component.css'],
  
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]

})
export class AccommodationsListComponent implements OnInit {

  accommodations: Accommodation[]= ACCOMMODATIONS;

  selectedAccommodation=Accommodation[0];

  constructor(
    @Inject('BaseURL') private BaseURL,
    private accommodationService:AccommodationService
    ) { }

  ngOnInit() {
    this.accommodations=this.accommodationService.getAccommodations();
  }

  onSelect(accommodation: Accommodation) {
    this.selectedAccommodation = accommodation;
    console.log(this.selectedAccommodation);
  }

}
