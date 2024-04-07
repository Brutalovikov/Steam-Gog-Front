import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../shared/providers/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  constructor(
    private userService: UserService,
  ) {}

  async login() {
    const data = await firstValueFrom(this.userService.auth());
    window.location.href = data.url;
  }
}
