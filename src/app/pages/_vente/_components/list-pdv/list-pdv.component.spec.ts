import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPdvComponent } from './list-pdv.component';

describe('ListPdvComponent', () => {
  let component: ListPdvComponent;
  let fixture: ComponentFixture<ListPdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPdvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
