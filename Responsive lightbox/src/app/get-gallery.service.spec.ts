import { TestBed, inject } from '@angular/core/testing';

import { GetGalleryService } from './get-gallery.service';

describe('GetGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGalleryService]
    });
  });

  it('should be created', inject([GetGalleryService], (service: GetGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
