import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBonCommandeComponent } from './add-bon-commande.component';

describe('AddBonCommandeComponent', () => {
  let component: AddBonCommandeComponent;
  let fixture: ComponentFixture<AddBonCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBonCommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBonCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
