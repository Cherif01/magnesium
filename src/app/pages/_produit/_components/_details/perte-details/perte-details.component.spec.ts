import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerteDetailsComponent } from './perte-details.component';

describe('PerteDetailsComponent', () => {
  let component: PerteDetailsComponent;
  let fixture: ComponentFixture<PerteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerteDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
