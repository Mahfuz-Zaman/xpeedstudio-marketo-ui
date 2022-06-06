import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandWatchComponent } from './hand-watch.component';

describe('HandWatchComponent', () => {
  let component: HandWatchComponent;
  let fixture: ComponentFixture<HandWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
