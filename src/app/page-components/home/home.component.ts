import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';

import { User, Place } from '../../_models';
import { PlacesService } from '../../_services';

@Component({
    templateUrl: './home.component.html',
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({ opacity: 0}),
        animate(400)
      ]),
      transition('* => void', animate(400, style({opacity: 0})))
    ])
  ]
})

export class HomeComponent implements OnInit {
    places: Place[] = [];
    myInterval: number = 3000;

    constructor( private placeService: PlacesService) {
    }

    ngOnInit() {
        this.loadPlaces();
    }

    private loadPlaces() {
        this.placeService.getAll().subscribe(placesData => { this.places = placesData; });
    }
}
