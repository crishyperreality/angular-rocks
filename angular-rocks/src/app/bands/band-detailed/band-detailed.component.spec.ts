import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandDetailedComponent } from './band-detailed.component';

describe('BandDetailedComponent', () => {
  let component: BandDetailedComponent;
  let fixture: ComponentFixture<BandDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
