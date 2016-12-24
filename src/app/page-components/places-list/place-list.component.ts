import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Place } from '../../_models';
import { PlacesService } from '../../_services';


@Component({
    templateUrl: './place-list.component.html'
})
export class PlaceListComponent implements OnInit {
    @Input() places: Place[];
    constructor(
        private http: Http,
        private placesService: PlacesService
    ) {
        this.places = [];
    }
    ngOnInit() {
        this.placesService.getAll()
            .subscribe(placesJson => this.places.push(...placesJson));
    }
}