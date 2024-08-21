import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerteComponent } from './perte.component';

describe('PerteComponent', () => {
  let component: PerteComponent;
  let fixture: ComponentFixture<PerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
