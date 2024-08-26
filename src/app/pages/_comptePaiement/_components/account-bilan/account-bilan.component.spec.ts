import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBilanComponent } from './account-bilan.component';

describe('AccountBilanComponent', () => {
  let component: AccountBilanComponent;
  let fixture: ComponentFixture<AccountBilanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountBilanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountBilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
