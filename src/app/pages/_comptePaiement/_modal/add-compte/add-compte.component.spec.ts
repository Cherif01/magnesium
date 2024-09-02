import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<<<< Temporary merge branch 1:src/app/pages/_comptePaiement/_modal/add-compte/add-compte.component.spec.ts
import { AddCompteComponent } from './add-compte.component';

describe('AddCompteComponent', () => {
  let component: AddCompteComponent;
  let fixture: ComponentFixture<AddCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCompteComponent);
==========
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
>>>>>>>>>> Temporary merge branch 2:src/app/home/_details/user-details/user-details.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
