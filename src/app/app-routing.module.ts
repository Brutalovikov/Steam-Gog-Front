import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchievementComponent } from './achievement/achievement.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: 'achievements',
    component: AchievementComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
