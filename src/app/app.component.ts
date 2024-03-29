import { Component } from '@angular/core';
import { SteamGogService } from './shared/providers/steamGog.service';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  //standalone: true
})
export class AppComponent {
  title = 'rudev-frontend';
  showFiller = false;

  constructor(
    private steamGog: SteamGogService
  ) {}

  async login() {
    // this.steamGog.auth().subscribe(newAddr => {
    //   console.log('new addr', newAddr)
    // })
    this.steamGog.auth().subscribe();
    //window.location.href = addr;
  }
}
