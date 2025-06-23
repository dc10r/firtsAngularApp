import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component'
import {HousingLocationInfo} from '../housing-location';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
    </section>
    `
  ,
  styleUrl: './home.component.css'
})
export class HomeComponent {
 readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocation: HousingLocationInfo = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}

