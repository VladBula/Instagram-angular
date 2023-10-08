import { TestBed } from '@angular/core/testing';

import { Value2Service } from './value2.service';

describe('Value2Service', () => {
  let service: Value2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Value2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
