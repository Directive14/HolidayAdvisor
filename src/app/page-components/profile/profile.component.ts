import { Component, OnInit, Input, trigger, transition, animate, state, style } from '@angular/core';
import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
    styleUrls: ['./profile.component.css'],
    templateUrl: './profile.component.html',
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': "'block'",
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateY(-100%)', opacity: 0}),
        animate(300)
      ]),
      transition('* => void', animate(300, style({transform: 'translateY(100%)', opacity: 0})))
    ])
  ]
})
export class ProfileComponent implements OnInit{
    @Input() currentUser: User = JSON.parse(localStorage.getItem('currentUser')).user;
     storageUser: User;

    constructor(private userService: UserService) {
        this.storageUser=new User;
    }
    ngOnInit() {
        let storageUserUsername = JSON.parse(localStorage.getItem('currentUser')).user.username;
        this.userService.getByUsername(storageUserUsername).subscribe(dbUser => this.currentUser = dbUser);
    }
}