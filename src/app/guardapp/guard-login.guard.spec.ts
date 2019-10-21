import { TestBed, async, inject } from '@angular/core/testing';

import { GuardLoginGuard } from './guard-login.guard';

describe('GuardLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardLoginGuard]
    });
  });

  it('should ...', inject([GuardLoginGuard], (guard: GuardLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
