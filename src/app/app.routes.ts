import { Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  {
    path: 'achievements',
    component: AchievementComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  }
];
