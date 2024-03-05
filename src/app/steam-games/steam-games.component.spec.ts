import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamGamesComponent } from './steam-games.component';

describe('SteamGamesComponent', () => {
  let component: SteamGamesComponent;
  let fixture: ComponentFixture<SteamGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteamGamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
