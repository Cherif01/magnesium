import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAjustementComponent } from './add-ajustement.component';

describe('AddAjustementComponent', () => {
  let component: AddAjustementComponent;
  let fixture: ComponentFixture<AddAjustementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAjustementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAjustementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
