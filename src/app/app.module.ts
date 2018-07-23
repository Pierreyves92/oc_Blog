import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './postlist/postlist-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostsService} from './services/posts.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';

const appRoutes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponentComponent},
  {path: '', redirectTo: 'posts', pathMatch: 'full'},
  {path: '**', redirectTo: 'posts'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
