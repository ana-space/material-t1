import { TestBed } from '@angular/core/testing';

import { WidgetsitemService } from './widgetsitem.service';

describe('WidgetsitemService', () => {
  let service: WidgetsitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetsitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
