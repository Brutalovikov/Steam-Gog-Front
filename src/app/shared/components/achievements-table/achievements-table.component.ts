import { Component, Input } from '@angular/core';

@Component({
  selector: 'achievements-table',
  templateUrl: './achievements-table.component.html',
  styleUrl: './achievements-table.component.scss'
})
export class AchievementsTableComponent {
  @Input() data: any;

  constructor() {} 

  columnsToDisplay = ['name', 'achieved'];
}
