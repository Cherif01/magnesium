import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComptePaiementComponent } from './list-compte-paiement.component';

describe('ListComptePaiementComponent', () => {
  let component: ListComptePaiementComponent;
  let fixture: ComponentFixture<ListComptePaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComptePaiementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComptePaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
