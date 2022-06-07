import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSellComponent } from './hot-sell.component';

describe('HotSellComponent', () => {
  let component: HotSellComponent;
  let fixture: ComponentFixture<HotSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
