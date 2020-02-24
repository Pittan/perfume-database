import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ToursListComponent } from './tours-list.component'

describe('ToursListComponent', () => {
  let component: ToursListComponent
  let fixture: ComponentFixture<ToursListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
