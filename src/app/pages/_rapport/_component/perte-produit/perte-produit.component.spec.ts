import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerteProduitComponent } from './perte-produit.component';

describe('PerteProduitComponent', () => {
  let component: PerteProduitComponent;
  let fixture: ComponentFixture<PerteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerteProduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerteProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
