import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SteamGogService {
  url = 'http://127.0.0.1:3000/steam';
  authUrl = 'http://127.0.0.1:3000/auth/steam/';
  constructor(
    private http: HttpClient,
  ) {} 

  getAchievements(userId: string, gameId: string): Observable<any> {
    //console.log("onInit camelCase");
    return this.http.get(`${this.url}/game/${gameId}/achievements/${userId}`);
  }

  getGames(userId: string): Observable<any> {
    return this.http.get(`${this.url}/games/${userId}`);
  }

  getGameInfoForGamePage(gameId: string): Observable<any> {
    return this.http.get(`${this.url}/info/${gameId}`);
  }

  auth(): Observable<any> {
    return this.http.get(this.authUrl);
  }
}