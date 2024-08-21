import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourAchatComponent } from './retour-achat.component';

describe('RetourAchatComponent', () => {
  let component: RetourAchatComponent;
  let fixture: ComponentFixture<RetourAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
