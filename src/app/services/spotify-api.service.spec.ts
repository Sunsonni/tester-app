/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SpotifyApiService } from './spotify-api.service';

describe('Service: SpotifyApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyApiService]
    });
  });

  it('should ...', inject([SpotifyApiService], (service: SpotifyApiService) => {
    expect(service).toBeTruthy();
  }));
});
