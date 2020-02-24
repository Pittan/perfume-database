import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ToursDetailComponent } from './tours-detail.component'

describe('ToursDetailComponent', () => {
  let component: ToursDetailComponent
  let fixture: ComponentFixture<ToursDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToursDetailComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
