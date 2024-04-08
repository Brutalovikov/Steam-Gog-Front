import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map, tap } from "rxjs";
import { ConfigService } from "./configuration.service";

@Injectable({ providedIn: 'root' })
export class UserService {
  backURL: string;
  private eventSource: EventSource;
  private events: Subject<any> = new Subject(); //отображение данных по ссе
  data: any; //данные по ссе

  //ЗДЕСЬ интересующие "позиции" из ссе
  userId: string; 
  userName: string;
  avatar: string;

  userId2: Subject<string> = new Subject<string>(); //на самом деле уже не юзается, но пока оставил :D
  //Обзерваблы, чтоб быть в курсе актуальных данных
  userID$: Observable<string> = this.getEvents().pipe(
    map(user => user.userId),
    tap(userId => {
      this.userId2.next(userId);
      this.userId = userId;
    })
  );
  userNAME$: Observable<string> = this.getEvents().pipe(
    map(user => user.userName),
    tap(userName => {
      this.userName = userName;
    })
  );
  AVATAR$: Observable<string> = this.getEvents().pipe(
    map(user => user.avatar),
    tap(avatar => {
      this.avatar = avatar;
    })
  );

  constructor(
    private http: HttpClient,
    private configService: ConfigService,
  ) {
    this.configService.loadConfig().then(() => {
      this.backURL = `${this.configService.getConfig().backendURL}/auth`;
    });
    //Здесь принимаются месседжи от ССЕ
    this.eventSource = new EventSource(`http://127.0.0.1:3000/auth/sse`);
    this.eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.events.next(data);
    };
  } 

  //Получаем данные по юзеру
  auth(): Observable<any> {
    return this.http.get(`${this.backURL}/steam`);
  }

  //Обнуляем данные
  logout(): Observable<any> {
    const req = this.http.get(`${this.backURL}/steam/logout`);
    return req;
  }

  //Для прерывания поток ссе
  ngOnDestroy() {
    this.eventSource.close();
  }

  getEvents(): Observable<any> {
    return this.events;
  }
}