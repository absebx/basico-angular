import { TestBed, inject } from '@angular/core/testing';

import { ReposService } from './repos.service';

describe('ReposService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReposService]
    });
  });

  it('should ...', inject([ReposService], (service: ReposService) => {
    expect(service).toBeTruthy();
  }));
});
