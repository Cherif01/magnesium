import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/_comptePaiement/_modal/add-compte/add-compte.component.spec.ts
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
========
import { MagasinDetailsComponent } from './magasin-details.component';

describe('MagasinDetailsComponent', () => {
  let component: MagasinDetailsComponent;
  let fixture: ComponentFixture<MagasinDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagasinDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagasinDetailsComponent);
>>>>>>>> 103ff233464b8b494a9806b450eb455b7661e047:src/app/home/_details/magasin-details/magasin-details.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
