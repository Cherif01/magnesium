import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuptureStockComponent } from './rupture-stock.component';

describe('RuptureStockComponent', () => {
  let component: RuptureStockComponent;
  let fixture: ComponentFixture<RuptureStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuptureStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuptureStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
