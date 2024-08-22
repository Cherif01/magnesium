import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntrepotComponent } from './add-entrepot.component';

describe('AddEntrepotComponent', () => {
  let component: AddEntrepotComponent;
  let fixture: ComponentFixture<AddEntrepotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntrepotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEntrepotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
