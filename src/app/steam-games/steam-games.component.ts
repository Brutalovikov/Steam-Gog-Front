import { Component, ViewChild } from '@angular/core';
import { SteamGogService } from '../shared/providers/steamGog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-steam-games',
  templateUrl: './steam-games.component.html',
  styleUrl: './steam-games.component.scss'
})
export class SteamGamesComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private steamService: SteamGogService,
  ) {}

  columnsToDisplay = ['name', 'progress', 'playtime_forever'];
  dataSource = new MatTableDataSource<Game>();
  gameCount: number;
  userId: string;

  gameForm = new FormGroup({
    userId: new FormControl('76561198280250790', {nonNullable: true, validators: Validators.required})
  });

  getGames() {
    this.userId = this.gameForm.controls.userId.value;
    //console.log(this.userId);
    
    this.steamService.getGames(this.userId).subscribe(data=>{
      this.dataSource.data = data.games
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator;
      this.gameCount = data.game_count
      //console.log(this.dataSource.data);
    });
    this.gameCount = this.dataSource.data.length;
  }

  getTotalPlayTime() {
    return this.dataSource.data.reduce((acc, value: Game) => acc + value.playtime_forever, 0);
  }
}

export interface Game {
  appid: number,
  name: string,
  playtime_forever: number
}
