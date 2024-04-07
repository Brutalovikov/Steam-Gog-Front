import { Component } from '@angular/core';
import { AchievementService } from './achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.scss'
})
export class AchievementComponent {
  achievements$ = this.achievementService.getAchievements();
  columnsToDisplay = ['name', 'game', 'description', 'achieved'];

  constructor(
    private achievementService: AchievementService,
  ) {} 

  clickLog() {
    this.achievements$.subscribe(data=>console.log(data));
  }
}
