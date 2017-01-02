import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';

import { User, Place } from '../../_models';
import { UserService, PlacesService } from '../../_services';

@Component({
    templateUrl: './home.component.html',
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
     '[style.position]': "'absolute'"
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', animate(300, style({transform: 'translateX(100%)', opacity: 0})))
    ])
  ]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    places: Place[] = [];
    myInterval: number = 3000;

    constructor(private userService: UserService, private placeService: PlacesService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadPlaces();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadPlaces() {
        this.placeService.getAll().subscribe(placesData => { this.places = placesData });
    }
}