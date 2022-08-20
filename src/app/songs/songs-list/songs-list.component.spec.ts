import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { SongsListComponent } from './songs-list.component'

describe('SongsListComponent', () => {
  let component: SongsListComponent
  let fixture: ComponentFixture<SongsListComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
