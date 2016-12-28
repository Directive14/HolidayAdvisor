import { Component, Input } from '@angular/core';
import { User } from '../../_models';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent{
    @Input() currentUser : User = JSON.parse(localStorage.getItem('currentUser'));
}