import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Liste des posts
  posts = [
    {
      title : "Mon premier post",
      content : "lore ipsum",
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : "Mon deuxieme post",
      content : "lore ipsum",
      loveIts : 2,
      created_at : new Date()
    },
    {
      title : "Mon troisieme post",
      content : "lore ipsum",
      loveIts : -1,
      created_at : new Date()
    }
  ];
}
