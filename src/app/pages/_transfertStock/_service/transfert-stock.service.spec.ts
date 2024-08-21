import { TestBed } from '@angular/core/testing';

import { TransfertStockService } from './transfert-stock.service';

describe('TransfertStockService', () => {
  let service: TransfertStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfertStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
