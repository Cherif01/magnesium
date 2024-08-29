import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustementDetailsComponent } from './ajustement-details.component';

describe('AjustementDetailsComponent', () => {
  let component: AjustementDetailsComponent;
  let fixture: ComponentFixture<AjustementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjustementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjustementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
