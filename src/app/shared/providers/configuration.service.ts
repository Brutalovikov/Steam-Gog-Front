import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'assets/environment.json';
  private config: any;

  constructor(private http: HttpClient) { }

  async loadConfig() {
    const data = await firstValueFrom(this.http.get(this.configUrl));
    this.config = data;
  }

  getConfig() {
    return this.config;
  }
}