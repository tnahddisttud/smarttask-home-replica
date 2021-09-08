import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDemoComponent } from './setup-demo.component';

describe('SetupDemoComponent', () => {
  let component: SetupDemoComponent;
  let fixture: ComponentFixture<SetupDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
