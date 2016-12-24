import { Component, OnInit, Input} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{Place} from '../../_models';

@Component({
    templateUrl: './place-list.component.html'
})
export class PlaceListComponent implements OnInit {
    @Input() places: Place[];
    constructor(private http: Http) {
        this.places = [];
    }
    ngOnInit() {
            this.http.get('http://localhost:3000/api/places')
            .map((res: Response) => res.json())
            .subscribe(placesJson => this.places.push(...placesJson));
    }
}