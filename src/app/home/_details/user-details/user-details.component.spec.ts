<<<<<<< HEAD
=======
import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/home/_details/user-details/user-details.component.spec.ts
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
========
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
>>>>>>>> b26e7e73d43333c886d7567e5269841094378fe0:src/app/pages/_comptePaiement/_modal/add-compte/add-compte.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 23b6f2d0742d0a0882073dd9956c669bf8cd20f8
