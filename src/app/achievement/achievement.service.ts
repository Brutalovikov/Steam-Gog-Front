import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AchievementService {
  constructor(
    private http: HttpClient,
  ) {} 

  getAchievements(): Observable<any> {
    //console.log("onInit camelCase");
    return this.http.get('http://127.0.0.1:3000/achievements');
  }
}