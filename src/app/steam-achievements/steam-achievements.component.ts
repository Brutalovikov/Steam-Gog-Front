import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  dataSource: any; //Наполнение таблицы
  games: Game[]; //Игрушки нужгы для заполнения селектора
  public selectedValue: string = ""; //Уже не нужно, но оставил на потом
  userId: string = this.userService.userId;
  userCheck: boolean = false; //Чекаем авторизованного юзера, нужно для отображения некоторых элементов
  gameId: string = ""; //Для селектора

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
      });
    }
  }

  ngAfterViewInit(): void {
    this.achievementForm.controls.userId.setValue(this.userId);
  }

  //Вызывается при выборе из селектора
  onChange(game: string) {
    this.achievementForm.controls.gameId.reset();
    this.achievementForm.controls.gameId.patchValue(game);
    this.achievementForm.controls.gameId.setValue(game);
  }

  getAchievements() {
    this.dataSource = null;
    this.userId = this.achievementForm.controls.userId.value;
    const gameId = this.achievementForm.controls.gameId.value;
    this.steamService.getAchievements(this.userId, gameId).subscribe(data=>this.dataSource = data);
  }
}
