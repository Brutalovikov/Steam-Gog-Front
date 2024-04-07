import { Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { GameComponent } from './game/game.component';
import { SteamAchievementsComponent } from './steam-achievements/steam-achievements.component';
import { SteamGamesComponent } from './steam-games/steam-games.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'achievements',
    component: AchievementComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'steam',
    component: SteamAchievementsComponent,
  },
  {
    path: 'steam-games',
    component: SteamGamesComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
