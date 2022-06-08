import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirtythreeComponent } from './thirtythree.component';

describe('ThirtythreeComponent', () => {
  let component: ThirtythreeComponent;
  let fixture: ComponentFixture<ThirtythreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirtythreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirtythreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
