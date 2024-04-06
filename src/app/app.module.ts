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
import { SteamAchievementsComponent } from './steam-achievements/steam-achievements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SteamGamesComponent } from './steam-games/steam-games.component';
import { MinutesToHoursPipe } from './shared/pipes/m2h.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SteamGameComponent } from './steam-game/steam-game.component';
import { AchievementsTableComponent } from './shared/components/achievements-table/achievements-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatToolbarHarness} from '@angular/material/toolbar/testing';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginComponent } from './login/login.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AchievementComponent,
    GameComponent,
    SteamAchievementsComponent,
    SteamGamesComponent,
    MinutesToHoursPipe,
    SteamGameComponent,
    AchievementsTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    //MatDrawerHarness,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
