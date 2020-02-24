import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SongsDetailComponent } from './songs-detail.component'

describe('SongsDetailComponent', () => {
  let component: SongsDetailComponent
  let fixture: ComponentFixture<SongsDetailComponent>

  beforeEach(async(() => {
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
