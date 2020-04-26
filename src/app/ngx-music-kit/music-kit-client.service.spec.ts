import { TestBed } from '@angular/core/testing'

import { MusicKitClientService } from './music-kit-client.service'

describe('MusicKitClientService', () => {
  let service: MusicKitClientService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(MusicKitClientService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
