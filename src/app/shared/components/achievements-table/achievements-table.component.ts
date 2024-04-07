import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'achievements-table',
  templateUrl: './achievements-table.component.html',
  styleUrl: './achievements-table.component.scss'
})
export class AchievementsTableComponent implements AfterViewInit {
  @Input() data: Achievement[];
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource<Achievement>();
  achievementCompeted: number;
  achievementNotCompleted: number;
  totalAchievement: number;

  constructor() {} 

  columnsToDisplay = ['icon', 'name', 'description', 'achieved'];

  ngAfterViewInit(): void {
    this.dataSource.data = this.data
    this.dataSource.sort = this.sort
    this.achievementCompeted = this.dataSource.data.filter(achievement => achievement.achieved).length;
    this.achievementNotCompleted = this.dataSource.data.filter(achievement => !achievement.achieved).length;
    this.totalAchievement = this.achievementCompeted + this.achievementNotCompleted;
  }
}

export interface Achievement {
  icon: string,
  name: string,
  description: string,
  achieved: number
}
