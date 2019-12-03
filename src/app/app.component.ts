/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<particles [style]="particleStyle" [width]="particlewidth" [height]="particleheight" [params]="particleParams" *ngIf="particleValue"></particles><router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  particleStyle: object = {};
  particleValue: boolean = true;
  particleParams: object = {};
  particlewidth: number = 100;
  particleheight: number = 100;

  constructor(private analytics: AnalyticsService) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.particleStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'background-image': 'url("../assets/images/theme-bg.jpg")',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
      'background-position': '50% 50%'
    };

    this.particleParams = {
      'particles': {
        'number': {
          'value': 55,
        },
        'color': {
          'value': '#ffffff',
        },
        'opacity': {
          'value': 1,
          'random': false,
        },
        'size': {
          'value': 3,
          'random': true,
        },
        'line_linked': {
          'enable': true,
          'distance': 150,
          'color': '#ffffff',
          'opacity': 0.9,
          'width': 1,
        },
        'move': {
          'enable': true,
          'speed': 3,
          'direction': 'none',
          'random': false,
          'straight': false,
          'out_mode': 'bounce',
        },
      },
      'retina_detect': true,
    };
  }
  
}
