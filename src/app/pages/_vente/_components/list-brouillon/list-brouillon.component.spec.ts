import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBrouillonComponent } from './list-brouillon.component';

describe('ListBrouillonComponent', () => {
  let component: ListBrouillonComponent;
  let fixture: ComponentFixture<ListBrouillonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBrouillonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBrouillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
