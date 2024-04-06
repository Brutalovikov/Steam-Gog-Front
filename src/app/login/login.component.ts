import { Component } from '@angular/core';
import { CanActivate, CanActivateFn } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  longText = `Sign in using Steam. The authorization button is located at the top right`;
}
