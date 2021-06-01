import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandFormComponent } from './band-form.component';

describe('BandFormComponent', () => {
  let component: BandFormComponent;
  let fixture: ComponentFixture<BandFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
