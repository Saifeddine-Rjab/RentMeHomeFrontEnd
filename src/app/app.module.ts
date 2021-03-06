import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccommodationsListComponent } from './accommodations-list/accommodations-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import 'hammerjs';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';

import { baseURL } from './links/baseurl';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import {AccommodationService} from './services/accommodation.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationsListComponent,
    AccommodationDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL},
    AccommodationService
],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
