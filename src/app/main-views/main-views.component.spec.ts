import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewsComponent } from './main-views.component';

describe('MainViewsComponent', () => {
  let component: MainViewsComponent;
  let fixture: ComponentFixture<MainViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
