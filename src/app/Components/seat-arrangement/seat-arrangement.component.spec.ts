import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatArrangementComponent } from './seat-arrangement.component';

describe('SeatArrangementComponent', () => {
  let component: SeatArrangementComponent;
  let fixture: ComponentFixture<SeatArrangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatArrangementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
