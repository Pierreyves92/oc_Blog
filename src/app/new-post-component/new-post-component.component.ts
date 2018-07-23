import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {

  postForm: FormGroup ;
  constructor(private formBuilder: FormBuilder, private router: Router, private potsService: PostsService) { }

  ngOnInit() {
    this.initForm() ;
  }

  initForm () {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required] ,
      content: ['', Validators.required]
    }) ;
  }

  onSavePost() {
  const title = this.postForm.get('title').value ;
  const content = this.postForm.get('content').value ;

  const newPost = new Post(title, content) ;
  this.potsService.createNewPost(newPost) ;
  this.router.navigate(['/posts']) ;
  }
}
