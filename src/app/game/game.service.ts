import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
// private eventSource: EventSource;
// private events: Subject<any> = new Subject();

  constructor(
    private http: HttpClient,
  ) {} 

  getGames(): Observable<any> {
    //console.log("onInit camelCase");
    return this.http.get('http://127.0.0.1:3000/game');
  }
}