import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawerHarness } from '@angular/material/sidenav/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementComponent } from './achievement/achievement.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AchievementComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    MatButtonModule,
    BrowserAnimationsModule,
    //MatDrawerHarness,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
