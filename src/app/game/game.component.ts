import { Component, OnInit } from '@angular/core';
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

  // eventSource$: any = new EventSource('/auth/sse');
  // eventSource$.onmessage = ({ data }) => {
  //   const message = document.createElement('li');
  //   message.innerText = 'New message: ' + data;
  //   document.body.appendChild(message);
  //   console.log(message);
  // }

  clickLog() {
    this.games$.subscribe(data=>console.log(data));
  }
}
