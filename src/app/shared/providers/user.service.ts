import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, map, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
  authUrl = 'http://127.0.0.1:3000/auth/steam';
  private eventSource: EventSource;
  private events: Subject<any> = new Subject();
  data: any;
  userId: string;
  userId2: Subject<string> = new Subject<string>();
  userID$: Observable<string> = this.getEvents().pipe(
    map(user => user.userId),
    tap(userId => {
      console.log(userId); 
      this.userId2.next(userId);
      this.userId = userId;
    })
  );
  userName: string;
  avatar: string;
  userNAME$: Observable<string> = this.getEvents().pipe(
    map(user => user.userName),
    tap(userName => {
      console.log(userName); 
      this.userName = userName;
    })
  );
  AVATAR$: Observable<string> = this.getEvents().pipe(
    map(user => user.avatar),
    tap(avatar => {
      console.log(avatar); 
      this.avatar = avatar;
    })
  );

  constructor(
    private http: HttpClient,
  ) {
    this.eventSource = new EventSource('http://127.0.0.1:3000/auth/sse');
    this.eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.events.next(data);
    };
  } 

  auth(): Observable<any> {
    //window.location.reload();
    return this.http.get(this.authUrl);
  }

  logout(): Observable<any> {
    const req = this.http.get(`${this.authUrl}/logout`);
    //this.eventSource.close();
    return req;
  }

  ngOnDestroy() {
    console.log("destroy");
    this.eventSource.close();
  }

  getEvents(): Observable<any> {
    return this.events;
  }
}