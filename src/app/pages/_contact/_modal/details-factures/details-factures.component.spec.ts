import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFacturesComponent } from './details-factures.component';

describe('DetailsFacturesComponent', () => {
  let component: DetailsFacturesComponent;
  let fixture: ComponentFixture<DetailsFacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFacturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsFacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
