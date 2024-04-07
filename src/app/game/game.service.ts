import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {

  constructor(
    private http: HttpClient,
  ) {} 

  getGames(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/game');
  }
}