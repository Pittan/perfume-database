import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { AlbumsListComponent } from './albums-list.component'

describe('AlbumsListComponent', () => {
  let component: AlbumsListComponent
  let fixture: ComponentFixture<AlbumsListComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
