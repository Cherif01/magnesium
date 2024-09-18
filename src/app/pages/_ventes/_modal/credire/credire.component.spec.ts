import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredireComponent } from './credire.component';

describe('CredireComponent', () => {
  let component: CredireComponent;
  let fixture: ComponentFixture<CredireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
