import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtTagComponent } from './txt-tag.component';

describe('TxtTagComponent', () => {
  let component: TxtTagComponent;
  let fixture: ComponentFixture<TxtTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
