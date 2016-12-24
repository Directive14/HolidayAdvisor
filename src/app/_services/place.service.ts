import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlacesService{
    constructor(private http:Http){}

    createPlace(place){
       return this.http.post('http://localhost:3000/api/places',place)
            .map((res: Response) => res.json())
    }
}