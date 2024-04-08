import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SteamGogService {
  url = 'http://127.0.0.1:3000/steam';
  authUrl = 'http://127.0.0.1:3000/auth/steam/';
  data: any;

  constructor(
    private http: HttpClient,
  ) {} 

  //Достать все ачивменты для таблицы
  getAchievements(userId: string, gameId: string): Observable<any> {
    return this.http.get(`${this.url}/game/${gameId}/achievements/${userId}`);
  }

  //Достать все игры для таблицы
  getGames(userId: string): Observable<any> {
    return this.http.get(`${this.url}/games/${userId}`);
  }

  //Достать всю инфу по игре для карточки
  getGameInfoForGamePage(gameId: string): Observable<any> {
    return this.http.get(`${this.url}/info/${gameId}`);
  }
}