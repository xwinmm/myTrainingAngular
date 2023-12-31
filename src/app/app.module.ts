import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent ///XWIN For New Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule   //XWIN For ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
