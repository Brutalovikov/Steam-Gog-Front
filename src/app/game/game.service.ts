import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { ConfigService } from "../shared/providers/configuration.service";

@Injectable({ providedIn: 'root' })
export class GameService {
  backURL: string;

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.configService.loadConfig().then(() => {
      this.backURL = this.configService.getConfig().backendURL;
    });
  } 

  getGames(): Observable<any> {
    return this.http.get(`${this.backURL}/game`);
  }
}