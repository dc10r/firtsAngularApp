import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationInfo} from '../housing-location';


@Component({
  selector: 'app-housing-location',
  imports: [CommonModule],
  template:  `
    <p>housing-location works!</p>,`,

  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

}
