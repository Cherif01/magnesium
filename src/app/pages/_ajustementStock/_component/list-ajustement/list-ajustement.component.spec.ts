import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAjustementComponent } from './list-ajustement.component';

describe('ListAjustementComponent', () => {
  let component: ListAjustementComponent;
  let fixture: ComponentFixture<ListAjustementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAjustementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAjustementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
