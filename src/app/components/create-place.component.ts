import { Component, Input } from '@angular/core';
import { Place } from '../_models/index';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertService, UserService } from '../_services/index';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-place.component.html'
})
export class CreatePlaceComponent {
    @Input() place: Place;


    constructor(
        private http: Http,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
    ) {
        this.place = {
            img: '',
            name: '',
            rating: 1
        }
    }
    // createPlace(place: Place) {
    //     this.http.post('http://localhost:3000/api/places', this.place)
    // }
    onSubmit() {
        this.http.post('http://localhost:3000/api/places', this.place)
            .map((res: Response) => res.json())
            .subscribe(
            data => {
                this.alertService.success(`${this.place.name} added successful`, true);
                this.router.navigate(['/places']);
            },
            error => {
                this.alertService.error(error);
            });
    }
}