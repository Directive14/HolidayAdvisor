import { Component, OnInit, trigger, transition, state, style, animate } from '@angular/core';
import {FeedService} from '../../_services';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';

@Component({
  selector: 'app-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.css'],
    host: {
     '[@routeAnimation]': 'true',
     '[style.display]': 'block',
   },
    animations: [
    trigger('routeAnimation', [
      state('*', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({ opacity: 0}),
        animate(500)
      ]),
      transition('* => void', animate(500, style({opacity: 0})))
    ])
  ]
})
export class FeedListComponent implements OnInit {

 // tslint:disable-next-line:max-line-length
 private feedUrl: string = 'https%3A%2F%2Fwww.theguardian.com%2Fuk%2Ftravel%2Frss&api_key=gk0gh49rwtwabgdj5gehtoacztkvyis1igf15ahi&order_dir=desc&count=20';
  private feeds: any;
  constructor(private feedService: FeedService) { }

  ngOnInit() {
    this.refreshFeed();
  }

  private refreshFeed() {
    this.feedService.getFeedContent(this.feedUrl)
        .subscribe(
            feed => this.feeds = feed.items,
            error => console.log(error));
  }

}
