import { Routes } from '@angular/router';

import {AccommodationDetailsComponent } from '../accommodation-details/accommodation-details.component';
import {AccommodationsListComponent } from '../accommodations-list/accommodations-list.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
  { path: 'accommodationDetails',  component: AccommodationDetailsComponent },
  { path: 'accommodationsList',     component: AccommodationsListComponent },
  { path: '', redirectTo: '/accommodationsList', pathMatch: 'full' },
  { path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];