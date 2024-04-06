import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SteamGogService } from '../shared/providers/steamGog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, tap } from 'rxjs';
import { UserService } from '../shared/providers/user.service';
import { Game } from '../shared/interfaces/game';

@Component({
  selector: 'app-steam-games',
  templateUrl: './steam-games.component.html',
  styleUrl: './steam-games.component.scss'
})
export class SteamGamesComponent implements OnInit{
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private steamService: SteamGogService,
    private userService: UserService,
  ) {}

  columnsToDisplay = ['name', 'progress', 'playtime_forever'];
  dataSource = new MatTableDataSource<Game>();
  gameCount: number;
  userId: string = this.userService.userId;
  userCheck: boolean = false;
  // userID$ = this.userService.userID$.pipe(
  //   tap(userId => { 
  //     console.log("11123"),
  //     this.gameForm.controls.userId.setValue(userId);
  //   })
  // );

  gameForm = new FormGroup({
    userId: new FormControl(this.userId, {nonNullable: true, validators: Validators.required})
  });

  ngOnInit(): void {
    if(this.userId) {
      this.getGames();
      this.userCheck = true;
    }   
  }

  ngOnDestroy() {
    //this.userID$.
  }

  getGames() {
    this.userId = this.gameForm.controls.userId.value;
    //console.log(this.userId);
    
    this.steamService.getGames(this.userId).subscribe(data=>{
      this.dataSource.data = data.games
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator;
      this.gameCount = data.game_count
      console.log(this.dataSource.data);
    });
    this.gameCount = this.dataSource.data.length;
  }

  getTotalPlayTime() {
    return this.dataSource.data.reduce((acc, value: Game) => acc + value.playtime_forever, 0);
  }
}
