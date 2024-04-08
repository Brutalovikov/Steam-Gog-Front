import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "./configuration.service";

@Injectable({ providedIn: 'root' })
export class SteamGogService {
  backURL: string;
  data: any;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.configService.loadConfig().then(() => {
      this.backURL = `${this.configService.getConfig().backendURL}/steam`;
    });
  } 

  //Достать все ачивменты для таблицы
  getAchievements(userId: string, gameId: string): Observable<any> {
    return this.http.get(`${this.backURL}/game/${gameId}/achievements/${userId}`);
  }

  //Достать все игры для таблицы
  getGames(userId: string): Observable<any> {
    return this.http.get(`${this.backURL}/games/${userId}`);
  }

  //Достать всю инфу по игре для карточки
  getGameInfoForGamePage(gameId: string): Observable<any> {
    return this.http.get(`${this.backURL}/info/${gameId}`);
  }
}