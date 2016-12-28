import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    @Input() currentUser: User = new User;

    constructor(){

    }
    ngOnInit() {
        let storageUser = JSON.parse(localStorage.getItem('currentUser')).user;
        this.currentUser.username = storageUser.username;
        this.currentUser.firstName = storageUser.firstName;
        this.currentUser.lastName = storageUser.lastName;
    }
}