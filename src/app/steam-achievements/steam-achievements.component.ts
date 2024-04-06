import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { MatTableDataSource } from '@angular/material/table';
import { SteamGogService } from '../shared/providers/steamGog.service';
import { UserService } from '../shared/providers/user.service';
import { Game } from '../shared/interfaces/game';

@Component({
  selector: 'app-steam-achievements',
  templateUrl: './steam-achievements.component.html',
  styleUrl: './steam-achievements.component.scss'
})
export class SteamAchievementsComponent implements OnInit , AfterViewInit{
  constructor(
    private steamService: SteamGogService,
    private userService: UserService,
  ) {} 

  dataSource: any;
  games: Game[];
  public selectedValue: string = "";
  userId: string = this.userService.userId;
  userCheck: boolean = false;
  gameId: string = "";

  achievementForm = new FormGroup({
    userId: new FormControl(this.userId, {nonNullable: true, validators: Validators.required}),
    gameId: new FormControl("", {nonNullable: true, validators: Validators.required}),
    selectId: new FormControl(''),
  });

  ngOnInit(): void {
    if(this.userId) {
      this.steamService.getGames(this.userId).subscribe(games=>{
        this.games = games.games
        this.userCheck = true;
        //console.log("table2", this.games);
      });
    }
    
    //window.location.reload();
  }

  ngAfterViewInit(): void {
    this.achievementForm.controls.userId.setValue(this.userId);
  }

  onChange(game: string) {
    this.achievementForm.controls.gameId.reset();
    //this.selectedValue = game;
    this.achievementForm.controls.gameId.patchValue(game);
    this.achievementForm.controls.gameId.setValue(game);
    //console.log("onchange", this.selectedValue, game)
  }

  getAchievements() {
    this.dataSource = null;
    this.userId = this.achievementForm.controls.userId.value;
    const gameId = this.achievementForm.controls.gameId.value;
    this.steamService.getAchievements(this.userId, gameId).subscribe(data=>this.dataSource = data);
    //console.log("fdfs", this.dataSource)
  }
}
