import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-postlist-item',
  templateUrl: './postlist-item.component.html',
  styleUrls: ['./postlist-item.component.css']
})
export class PostlistItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
  onLike()
  {
    this.post.loveIts = this.post.loveIts+1 ;

  }
  onDislike()
  {
    this.post.loveIts = this.post.loveIts-1 ;
  }

  getLikes()
  {
    return this.post.loveIts ;
  }

}
