import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComptePaiementComponent } from './add-compte-paiement.component';

describe('AddComptePaiementComponent', () => {
  let component: AddComptePaiementComponent;
  let fixture: ComponentFixture<AddComptePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComptePaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComptePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
