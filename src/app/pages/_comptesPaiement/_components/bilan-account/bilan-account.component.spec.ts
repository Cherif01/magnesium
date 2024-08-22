import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanAccountComponent } from './bilan-account.component';

describe('BilanAccountComponent', () => {
  let component: BilanAccountComponent;
  let fixture: ComponentFixture<BilanAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BilanAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
