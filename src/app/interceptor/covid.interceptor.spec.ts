import { TestBed } from '@angular/core/testing';

import { CovidInterceptor } from './covid.interceptor';

describe('CovidInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CovidInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CovidInterceptor = TestBed.inject(CovidInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
