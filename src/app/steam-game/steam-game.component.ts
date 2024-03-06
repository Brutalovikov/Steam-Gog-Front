import { Component, inject } from '@angular/core';
import { SteamGogService } from '../shared/providers/steamGog.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-steam-game',
  templateUrl: './steam-game.component.html',
  styleUrl: './steam-game.component.scss'
})
export class SteamGameComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  gameId: string;
  userId: string;
  achievements$: Observable<any>;

  constructor(
    private steamService: SteamGogService,
  ) {
    this.gameId = this.route.snapshot.params['id'];
    this.userId = this.route.snapshot.params['userId'];
    this.achievements$ = this.steamService.getAchievements(this.userId, this.gameId).pipe(
      tap(achievements => console.log(achievements)),
    );
    //this.steamService.getAchievements("", this.gameId.toString());
  }


}
