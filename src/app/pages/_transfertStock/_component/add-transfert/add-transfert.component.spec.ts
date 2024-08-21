import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransfertComponent } from './add-transfert.component';

describe('AddTransfertComponent', () => {
  let component: AddTransfertComponent;
  let fixture: ComponentFixture<AddTransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransfertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
