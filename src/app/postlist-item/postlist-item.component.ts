import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-postlist-item',
  templateUrl: './postlist-item.component.html',
  styleUrls: ['./postlist-item.component.css']
})
export class PostlistItemComponent implements OnInit {

  @Input() title: string ;
  @Input()content: string;
  @Input()loveIts: number;
  @Input()created_at: Date;

  constructor() { }

  ngOnInit() {
  }
  onLike()
  {
    this.loveIts = this.loveIts+1 ;

  }
  onDislike()
  {
    this.loveIts = this.loveIts-1 ;
  }

  getLikes()
  {
    return this.loveIts ;
  }

}
