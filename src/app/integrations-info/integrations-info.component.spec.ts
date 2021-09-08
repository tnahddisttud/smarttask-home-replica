import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationsInfoComponent } from './integrations-info.component';

describe('IntegrationsInfoComponent', () => {
  let component: IntegrationsInfoComponent;
  let fixture: ComponentFixture<IntegrationsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
