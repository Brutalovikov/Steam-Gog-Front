import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource } from '@angular/material/table';
import { SteamGogService } from '../shared/providers/steamGog.service';

@Component({
  selector: 'app-steam-achievements',
  templateUrl: './steam-achievements.component.html',
  styleUrl: './steam-achievements.component.scss'
})
export class SteamAchievementsComponent {
  constructor(
    private steamService: SteamGogService,
  ) {} 

  //achievements$ = this.steamService.getAchievements();
  //columnsToDisplay = ['name', 'achieved'];
  dataSource: any;

  achievementForm = new FormGroup({
    userId: new FormControl('76561198280250790', {nonNullable: true, validators: Validators.required}),
    gameId: new FormControl('550', {nonNullable: true, validators: Validators.required}),
  });

  // getGames(): Observable<any> {
  //   //console.log("onInit camelCase");
  //   return this.http.get('http://127.0.0.1:3000/steam');
  // }

  getAchievements() {
    const userId = this.achievementForm.controls.userId.value;
    const gameId = this.achievementForm.controls.gameId.value;
    
    this.steamService.getAchievements(userId, gameId).subscribe(data=>this.dataSource = data);
  }
}
