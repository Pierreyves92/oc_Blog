// Classe representant un post dans l'appli
export class Post {
   loveIts = 0 ;
  created_at  = Date.now() ;

  constructor(public title: string,  public content: string) {

  }

}
