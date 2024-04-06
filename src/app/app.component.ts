import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, combineLatest, firstValueFrom, interval, map, tap } from 'rxjs';
import { UserService } from './shared/providers/user.service';
import { Router } from '@angular/router';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') sidenav: MatDrawer;
  title = 'rudev-frontend';
  showFiller = false;
  userId: string = this.userService.userId;
  userName = this.userService.userName;
  avatar = this.userService.avatar;
  userId2 = this.userService.userId2;
  userID$: Observable<string> = this.userService.userID$.pipe(
    tap(userId => this.userId = userId)
  );
  userNAME$: Observable<string> = this.userService.userNAME$.pipe(
    tap(userName => this.userName = userName)
  );
  AVATAR$: Observable<string> = this.userService.AVATAR$.pipe(
    tap(avatar => this.avatar = avatar)
  );
  public userCheck: boolean = false;
  public show: boolean = false;
  // document: Document;


  constructor(
    private userService: UserService,
    private router: Router, 
    private cdr: ChangeDetectorRef
  ) {
    if (!this.userId) {
      //location.replace('http://127.0.0.1:4200/steam'); // clears browser history so they can't navigate with back button
      //this.router.navigate(['PublicPage']);
  }
  }

  ngOnInit(): void {

    this.userID$.subscribe(
      userId => {
        this.userId = userId
        if(this.userId != null) {
          this.userCheck = true;
        } 
        if(this.userId == null) {
          this.show = true;
        }
      }
    );
    this.userNAME$.subscribe(
      userName => {
        this.userName = userName
      }
    );
    this.AVATAR$.subscribe(
      avatar => {
        this.avatar = avatar
      }
    );
    console.log("init", this.userCheck, this.show)
    console.log(this.userName, this.avatar);
  }

  like() {
    console.log("like")
  }

  ngAfterViewInit(): void {
    this.sidenav.open()  
  }

  destroy() {
    this.userService.ngOnDestroy();
  }

  async login() {
    const data = await firstValueFrom(this.userService.auth());
    window.location.href = data.url; 
    console.log(this.userCheck)
  }

  async logout() {
    this.userCheck = true;
    await firstValueFrom(this.userService.logout());
    window.location.reload();
    console.log(this.userCheck)
  }
}
