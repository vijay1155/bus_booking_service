import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdetailCardComponent } from './busdetail-card.component';

describe('BusdetailCardComponent', () => {
  let component: BusdetailCardComponent;
  let fixture: ComponentFixture<BusdetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusdetailCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusdetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
