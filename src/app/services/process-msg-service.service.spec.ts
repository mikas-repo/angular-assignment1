import { TestBed } from '@angular/core/testing';

import { ProcessMsgServiceService } from './process-msg-service.service';

describe('ProcessMsgServiceService', () => {
  let service: ProcessMsgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessMsgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
