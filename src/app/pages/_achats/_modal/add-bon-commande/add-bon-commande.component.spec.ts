import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/pages/_contact/_components/detail-client/detail-client.component.spec.ts
import { DetailClientComponent } from './detail-client.component';

describe('DetailClientComponent', () => {
  let component: DetailClientComponent;
  let fixture: ComponentFixture<DetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailClientComponent);
========
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
>>>>>>>> 103ff233464b8b494a9806b450eb455b7661e047:src/app/pages/_achats/_modal/add-bon-commande/add-bon-commande.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
