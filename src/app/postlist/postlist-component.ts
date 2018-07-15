import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-postlist-component',
  templateUrl: './postlist-component.html',
  styleUrls: ['./postlist-component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: [Post];

  constructor() { }

  ngOnInit() {
  }

}
