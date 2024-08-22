import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerteComponent } from './add-perte.component';

describe('AddPerteComponent', () => {
  let component: AddPerteComponent;
  let fixture: ComponentFixture<AddPerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPerteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
