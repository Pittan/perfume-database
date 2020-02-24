import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EventsDetailComponent } from './events-detail.component'

describe('EventsDetailComponent', () => {
  let component: EventsDetailComponent
  let fixture: ComponentFixture<EventsDetailComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsDetailComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsDetailComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
