import {AppComponent} from './app.component';
import {TestBed} from '@angular/core/testing';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent
      ], imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have correct title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toBe('organ-app');
  });
});
