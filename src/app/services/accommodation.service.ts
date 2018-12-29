import { Injectable } from '@angular/core';
import  {ACCOMMODATIONS} from '../data/accommodations'
import { Accommodation } from '../models/accommodation';
@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor() { }

  getAccommodations(): Accommodation[]{
    return ACCOMMODATIONS;
  }
}
