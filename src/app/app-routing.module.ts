import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { GameComponent } from './game/game.component';
import { SteamAchievementsComponent } from './steam-achievements/steam-achievements.component';
import { SteamGamesComponent } from './steam-games/steam-games.component';
import { SteamGameComponent } from './steam-game/steam-game.component';

const routes: Routes = [
  {
    path: 'achievements',
    component: AchievementComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
  {
    path: 'user/:userId/steam-game/:id',
    component: SteamGameComponent,
  },
  {
    path: 'steam',
    component: SteamAchievementsComponent,
  },
  {
    path: 'steam-games',
    component: SteamGamesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
