import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlist-component',
  templateUrl: './postlist-component.html',
  styleUrls: ['./postlist-component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: any;

  constructor() { }

  ngOnInit() {
  }

}
