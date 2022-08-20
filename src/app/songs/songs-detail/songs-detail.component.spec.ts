import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SongsDetailComponent } from './songs-detail.component'

describe('SongsDetailComponent', () => {
  let component: SongsDetailComponent
  let fixture: ComponentFixture<SongsDetailComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsDetailComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
