import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListUSerComponent } from './add-list-user.component';

describe('AddListUSerComponent', () => {
  let component: AddListUSerComponent;
  let fixture: ComponentFixture<AddListUSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListUSerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListUSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
