import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerLaptopComponent } from './computer-laptop.component';

describe('ComputerLaptopComponent', () => {
  let component: ComputerLaptopComponent;
  let fixture: ComponentFixture<ComputerLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
