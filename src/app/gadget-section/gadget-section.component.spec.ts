import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetSectionComponent } from './gadget-section.component';

describe('GadgetSectionComponent', () => {
  let component: GadgetSectionComponent;
  let fixture: ComponentFixture<GadgetSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadgetSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
