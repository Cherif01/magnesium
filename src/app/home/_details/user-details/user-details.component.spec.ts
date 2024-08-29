import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/_comptePaiement/_components/account-list/account-list.component.spec.ts
import { AccountListComponent } from './account-list.component';

describe('AccountListComponent', () => {
  let component: AccountListComponent;
  let fixture: ComponentFixture<AccountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountListComponent);
========
import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsComponent);
>>>>>>>> 103ff233464b8b494a9806b450eb455b7661e047:src/app/home/_details/user-details/user-details.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
