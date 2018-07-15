import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './postlist/postlist-component';
import {FormsModule} from '@angular/forms';
import { PostlistItemComponent } from './postlist-item/postlist-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostlistItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
