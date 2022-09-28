import { TestBed } from '@angular/core/testing';

import { PagesListService } from './pages-list.service';

describe('PagesListDataService', () => {
  let service: PagesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
