import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomMostFooterComponent } from './bottom-most-footer.component';

describe('BottomMostFooterComponent', () => {
  let component: BottomMostFooterComponent;
  let fixture: ComponentFixture<BottomMostFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomMostFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMostFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
