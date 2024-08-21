import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimeComponent } from './perime.component';

describe('PerimeComponent', () => {
  let component: PerimeComponent;
  let fixture: ComponentFixture<PerimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
