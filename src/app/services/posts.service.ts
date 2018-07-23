import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase' ;
import {Injectable} from '@angular/core';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostsService{

  posts: Post[] = [] ;
  subjectPosts = new Subject<Post[]>() ;

  constructor() {
    this.init();
  }

  init() {

    firebase.database().ref('/Posts').on(
      'value', (data: DataSnapshot) => {
        this.posts = data.val() ? data.val() : [] ;
        this.emitPosts() ;
      }
    );
  }

  emitPosts () {
   return this.subjectPosts.next(this.posts) ;
  }

  savePosts (){
  firebase.database().ref('/Posts').set(this.posts) ;
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost (post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
  likePost (post: Post)  {
    const postIndex = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true ;
        }
      }
    );
    this.posts[postIndex].loveIts++ ;
    this.savePosts() ;
    this.emitPosts() ;
  }
  dislikePost (post: Post)  {
    const postIndex = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true ;
        }
      }
    );
    this.posts[postIndex].loveIts-- ;
    this.savePosts() ;
    this.emitPosts() ;
  }
}
