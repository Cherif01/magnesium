import { TestBed } from '@angular/core/testing';

import { AjustementStockService } from './ajustement-stock.service';

describe('AjustementStockService', () => {
  let service: AjustementStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjustementStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
