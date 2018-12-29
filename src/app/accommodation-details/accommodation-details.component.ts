import { Component, OnInit,Inject,Input } from '@angular/core';
import { visibility, flyInOut, expand } from '../animations/app.animation';
import {Accommodation} from '../models/accommodation';

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

  
  @Input()
  accommodation: Accommodation;
  constructor(@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }

}
