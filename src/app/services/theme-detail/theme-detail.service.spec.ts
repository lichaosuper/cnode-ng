import { TestBed } from '@angular/core/testing';

import { ThemeDetailService } from './theme-detail.service';

describe('ThemeDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeDetailService = TestBed.get(ThemeDetailService);
    expect(service).toBeTruthy();
  });
});
