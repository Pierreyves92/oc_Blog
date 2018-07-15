import { Component } from '@angular/core';

// Classe representant un post dans l'appli
export class Post{
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;

  constructor(title: string, content: string, loveIts: number) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.created_at = new Date();
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Liste des posts
  posts = [
      new Post("Mon premier post","lore ipsum",0),
      new Post("Mon deuxieme post", "lore ipsum post", 2),
      new Post("Mon troisieme post", "lore ipsum post", -1)
  ];
}
