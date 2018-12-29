import { Component, OnInit,Inject,Input } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import {Accommodation} from '../models/accommodation';
import {AccommodationService} from '../services/accommodation.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-accommodation-details',
  templateUrl: './accommodation-details.component.html',
  styleUrls: ['./accommodation-details.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      visibility(),
      expand()
    ]
})
export class AccommodationDetailsComponent implements OnInit {

  
  accommodation: Accommodation;
  constructor(@Inject('BaseURL') private BaseURL,
  private accommodationService:AccommodationService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
    const id = ""+this.route.snapshot.params['id'];
    this.accommodation = this.accommodationService.getAccommodation(id);
  }
  goBack(): void {
    this.location.back();
  }

}
