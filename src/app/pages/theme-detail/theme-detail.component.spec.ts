import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDetailComponent } from './theme-detail.component';

describe('ThemeDetailComponent', () => {
  let component: ThemeDetailComponent;
  let fixture: ComponentFixture<ThemeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
