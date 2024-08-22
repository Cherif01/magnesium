import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementAchatComponent } from './paiement-achat.component';

describe('PaiementAchatComponent', () => {
  let component: PaiementAchatComponent;
  let fixture: ComponentFixture<PaiementAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
