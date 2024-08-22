import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuPosComponent } from './recu-pos.component';

describe('RecuPosComponent', () => {
  let component: RecuPosComponent;
  let fixture: ComponentFixture<RecuPosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuPosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
