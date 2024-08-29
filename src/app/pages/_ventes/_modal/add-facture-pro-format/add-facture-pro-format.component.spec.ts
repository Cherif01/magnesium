import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFactureProFormatComponent } from './add-facture-pro-format.component';

describe('AddFactureProFormatComponent', () => {
  let component: AddFactureProFormatComponent;
  let fixture: ComponentFixture<AddFactureProFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFactureProFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFactureProFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
