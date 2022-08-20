import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { EventsListComponent } from './events-list.component'

describe('EventsListComponent', () => {
  let component: EventsListComponent
  let fixture: ComponentFixture<EventsListComponent>

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsListComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
