import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './MyComponents/add-book/add-book.component';
import { GetBookComponent } from './MyComponents/get-book/get-book.component';
import { NotFoundComponent } from './MyComponents/not-found/not-found.component';
import { LibraryComponent } from './MyComponents/library/library.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { AddserviceService } from './addservice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    GetBookComponent,
    NotFoundComponent,
    LibraryComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
