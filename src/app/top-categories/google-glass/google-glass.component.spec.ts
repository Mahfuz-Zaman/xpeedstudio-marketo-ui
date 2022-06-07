import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleGlassComponent } from './google-glass.component';

describe('GoogleGlassComponent', () => {
  let component: GoogleGlassComponent;
  let fixture: ComponentFixture<GoogleGlassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleGlassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleGlassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
