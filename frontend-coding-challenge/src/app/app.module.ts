import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { RepositoryListComponent } from './views/repository-list/repository-list.component';
import { RepositoryItemComponent } from './views/repository-item/repository-item.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { KformaterPipe } from './filters/kformater.pipe';
import { SearchPipe } from './filters/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryListComponent,
    RepositoryItemComponent,
    KformaterPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
