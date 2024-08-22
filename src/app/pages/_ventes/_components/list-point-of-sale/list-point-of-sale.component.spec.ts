import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPointOfSaleComponent } from './list-point-of-sale.component';

describe('ListPointOfSaleComponent', () => {
  let component: ListPointOfSaleComponent;
  let fixture: ComponentFixture<ListPointOfSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPointOfSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPointOfSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
