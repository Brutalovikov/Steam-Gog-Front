import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { UserService } from './shared/providers/user.service';
import { Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer') sidenav: MatDrawer;
  title = 'rudev-frontend';
  //showFiller = false;

  //Данные авторизованного пользователя
  userId: string = this.userService.userId;
  userName = this.userService.userName;
  avatar = this.userService.avatar;

  //Актуальные данные
  userID$: Observable<string> = this.userService.userID$.pipe(
    tap(userId => this.userId = userId)
  );
  userNAME$: Observable<string> = this.userService.userNAME$.pipe(
    tap(userName => this.userName = userName)
  );
  AVATAR$: Observable<string> = this.userService.AVATAR$.pipe(
    tap(avatar => this.avatar = avatar)
  );

  //Для отображения компонентов
  public userCheck: boolean = false;
  public show: boolean = false;


  constructor(
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {

    //Куча ифов в сабскрайбе для отображения элементов
    this.userID$.subscribe(
      userId => {
        this.userId = userId
        if(this.userId != null) {
          this.userCheck = true;
        } 
        if(this.userId == null) {
          this.show = true;
        }
        if (!this.userCheck) {
          this.openDialog();
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
  }

  //Окно для не авторизованных пользователей
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Не задействованная кнопка
  like() {
    console.log("like")
  }

  ngAfterViewInit(): void {
    this.sidenav.open()  
  }

  //Кнопка для остановления потока данных ссе
  destroy() {
    this.userService.ngOnDestroy();
  }

  async login() {
    const data = await firstValueFrom(this.userService.auth());
    window.location.href = data.url; 
  }

  async logout() {
    this.userCheck = true;
    await firstValueFrom(this.userService.logout());
    window.location.replace('http://localhost:4200');
  }
}
