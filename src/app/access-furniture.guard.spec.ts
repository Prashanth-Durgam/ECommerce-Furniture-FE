import { TestBed } from '@angular/core/testing';

import { AccessFurnitureGuard } from './access-furniture.guard';

describe('AccessFurnitureGuard', () => {
  let guard: AccessFurnitureGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessFurnitureGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
