import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrouillonComponent } from './add-brouillon.component';

describe('AddBrouillonComponent', () => {
  let component: AddBrouillonComponent;
  let fixture: ComponentFixture<AddBrouillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBrouillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBrouillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
