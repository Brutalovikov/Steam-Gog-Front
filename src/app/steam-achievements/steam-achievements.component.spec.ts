import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamAchievementsComponent } from './steam-achievements.component';

describe('SteamAchievementsComponent', () => {
  let component: SteamAchievementsComponent;
  let fixture: ComponentFixture<SteamAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SteamAchievementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SteamAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
