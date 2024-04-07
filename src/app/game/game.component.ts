import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  games$ = this.gameService.getGames();
  columnsToDisplay = ['name', 'priceDollar', 'priceRub', 'priceEuro'];

  constructor(
    private gameService: GameService,
  ) {} 

  clickLog() {
    this.games$.subscribe(data=>console.log(data));
  }
}
