import { Component } from '@angular/core';
import * as firebase from 'firebase' ;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor () {
    const config = {
      apiKey: "AIzaSyDIb7Gss7L9f2LlP7rHGkFac1cubScMc_o",
      authDomain: "http-client-demo-4a86e.firebaseapp.com",
      databaseURL: "https://http-client-demo-4a86e.firebaseio.com",
      projectId: "http-client-demo-4a86e",
      storageBucket: "http-client-demo-4a86e.appspot.com",
      messagingSenderId: "914233368732"
    };
    firebase.initializeApp(config);
  }
}
