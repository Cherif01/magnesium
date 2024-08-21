import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquettesComponent } from './etiquettes.component';

describe('EtiquettesComponent', () => {
  let component: EtiquettesComponent;
  let fixture: ComponentFixture<EtiquettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiquettesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtiquettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
