import { Component, OnInit } from '@angular/core';
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

    // ngOnInit(): void {
    //   console.log("onInit camelCase");
    //   this.achievementService.getAchievements();
    // }

  clickLog() {
    this.achievements$.subscribe(data=>console.log(data));
  }
}
