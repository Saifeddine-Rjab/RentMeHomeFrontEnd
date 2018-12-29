import { Component, OnInit,Inject } from '@angular/core';
import {Accommodation} from '../models/accommodation';
import { flyInOut, expand } from '../animations/app.animation';
import {Comment} from '../models/comment';

const ACCOMMODATIONS :Accommodation[] = [
  {id:'1',
  city:'Ons',
  address: 'Ons',
  numberOfRooms:3,
  furnished: true,
  images: ['house.png','house3.jpg'],
  description: 'desc'  ,
  title: 'Appartement s+2 meublé',
  comments: [
    { rating :4,
      comment: 'Good house',
      author: 'Ahmed ben Mouhamed',
      date: '17/03/2018'
    },
    {
      rating: 5,
      comment: 'Imagine all the eatables, living in conFusion!',
      author: 'John Lemon',
      date: '2012-10-16T17:57:28.556094Z'
  },
  {
      rating: 4,
      comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
      author: 'Paul McVites',
      date: '2014-09-05T17:57:28.556094Z'
  },
  {
      rating: 3,
      comment: 'Eat it, just eat it!',
      author: 'Michael Jaikishan',
      date: '2015-02-13T17:57:28.556094Z'
  },
  {
      rating: 4,
      comment: 'Ultimate, Reaching for the stars!',
      author: 'Ringo Starry',
      date: '2013-12-02T17:57:28.556094Z'
  },
  {
      rating: 2,
      comment: 'It\'s your birthday, we\'re gonna party!',
      author: '25 Cent',
      date: '2011-12-02T17:57:28.556094Z'
  }
  ]
  },
  {id:'2',
  city:'Ons',
  address: 'Ons',
  numberOfRooms:3,
  furnished: true,
  images: ['house3.jpg','im2'],
  description: 'desc',
  title: 'Une Maison bien meublée à 100m de l enetcom',
  comments: [
    { rating :4,
      comment: 'Good house',
      author: 'Ahmed ben Mouhamed',
      date: '17/03/2018'
    }
  ]
  },
  {id:'2',
  city:'Ons',
  address: 'Ons',
  numberOfRooms:3,
  furnished: true,
  images: ['house5.jpg','im2'],
  description: 'desc',
  title: 'Une Maison bien meublée à 100m de l enetcom',
  comments: [
    { rating :4,
      comment: 'Good house',
      author: 'Ahmed ben Mouhamed',
      date: '17/03/2018'
    }
  ]
  },
  {id:'2',
  city:'Ons',
  address: 'Ons',
  numberOfRooms:3,
  furnished: true,
  images: ['house4.jpg','im2'],
  description: 'desc',
  title: 'Une Maison bien meublée à 100m de l enetcom',
  comments: [
    { rating :4,
      comment: 'Good house',
      author: 'Ahmed ben Mouhamed',
      date: '17/03/2018'
    }
  ]
  },
  {id:'2',
  city:'Ons',
  address: 'Ons',
  numberOfRooms:3,
  furnished: true,
  images: ['house6.png','im2'],
  description: 'desc',
  title: 'Une Maison bien meublée à 100m de l enetcom',
  comments: [
    { rating :4,
      comment: 'Good house',
      author: 'Ahmed ben Mouhamed',
      date: '17/03/2018'
    }
  ]
  }
]
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

  constructor(@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  }

  onSelect(accommodation: Accommodation) {
    this.selectedAccommodation = accommodation;
    console.log(this.selectedAccommodation);
  }

}
