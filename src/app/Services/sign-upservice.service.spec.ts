import { TestBed } from '@angular/core/testing';

import { SignUpserviceService } from './sign-upservice.service';

describe('SignUpserviceService', () => {
  let service: SignUpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignUpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
