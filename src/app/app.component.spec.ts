import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyApp } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MyApp
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MyApp);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PMS'`, () => {
    const fixture = TestBed.createComponent(MyApp);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PMS');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MyApp);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to PMS!');
  });
});
