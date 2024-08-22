import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransfertStockComponent } from './add-transfert-stock.component';

describe('AddTransfertStockComponent', () => {
  let component: AddTransfertStockComponent;
  let fixture: ComponentFixture<AddTransfertStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransfertStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransfertStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
