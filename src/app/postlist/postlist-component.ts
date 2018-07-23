import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-postlist-component',
  templateUrl: './postlist-component.html',
  styleUrls: ['./postlist-component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription ;

  constructor(private router: Router, private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.subjectPosts.subscribe(
      (posts: Post[]) => { this.posts = posts ; }
    ) ;
    this.postsService.emitPosts() ;
  }
  ngOnDestroy() {
    this.postsSubscription.unsubscribe();

  }
  onLike(post: Post) {
   // post.loveIts++ ;
    this.postsService.likePost(post) ;

  }
  onDislike(post: Post) {
   // post.loveIts-- ;
   this.postsService.dislikePost(post) ;

  }

   onDeletePost (post: Post) {
    this.postsService.removePost(post) ;
  }

}
