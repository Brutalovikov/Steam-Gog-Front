import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class SteamGogService {
  url = 'http://127.0.0.1:3000/steam';
  authUrl = 'http://127.0.0.1:3000/auth/steam/';
  data: any;

  constructor(
    private http: HttpClient,
    private router: Router,
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
}