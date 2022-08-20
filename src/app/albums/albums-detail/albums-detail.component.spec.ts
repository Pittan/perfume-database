import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { AlbumsDetailComponent } from './albums-detail.component'

describe('AlbumsDetailComponent', () => {
  let component: AlbumsDetailComponent
  let fixture: ComponentFixture<AlbumsDetailComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsDetailComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
