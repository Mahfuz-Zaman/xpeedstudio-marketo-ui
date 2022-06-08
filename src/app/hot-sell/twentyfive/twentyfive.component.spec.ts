import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyfiveComponent } from './twentyfive.component';

describe('TwentyfiveComponent', () => {
  let component: TwentyfiveComponent;
  let fixture: ComponentFixture<TwentyfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwentyfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
