import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAjustementAchatComponent } from './add-ajustement-stock.component';

describe('AddAjustementAchatComponent', () => {
  let component: AddAjustementAchatComponent;
  let fixture: ComponentFixture<AddAjustementAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAjustementAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAjustementAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
