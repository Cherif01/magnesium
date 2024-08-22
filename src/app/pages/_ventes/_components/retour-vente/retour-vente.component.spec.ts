import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourVenteComponent } from './retour-vente.component';

describe('RetourVenteComponent', () => {
  let component: RetourVenteComponent;
  let fixture: ComponentFixture<RetourVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourVenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
