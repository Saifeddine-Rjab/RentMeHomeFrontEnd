import { Component, OnInit } from '@angular/core';
import {Accommodation} from '../models/accommodation';

@Component({
  selector: 'app-accommodations-list',
  templateUrl: './accommodations-list.component.html',
  styleUrls: ['./accommodations-list.component.css']
})
export class AccommodationsListComponent implements OnInit {

  accommodations: Accommodation[]= [
    {id:'1',
    city:'Ons',
    address: 'Ons',
    numberOfRooms:3,
    furnished: true,
    images: ['im1','im2'],
    description: 'desc'  
    },
    {id:'2',
    city:'Ons',
    address: 'Ons',
    numberOfRooms:3,
    furnished: true,
    images: ['im1','im2'],
    description: 'desc'  
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
