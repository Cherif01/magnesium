import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepotDetailsComponent } from './entrepot-details.component';

describe('EntrepotDetailsComponent', () => {
  let component: EntrepotDetailsComponent;
  let fixture: ComponentFixture<EntrepotDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepotDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
