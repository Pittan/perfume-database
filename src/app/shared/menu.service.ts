import { Injectable } from '@angular/core'
import { BehaviorSubject, fromEvent } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  isMobileView = false
  showHeaderToggleButton = new BehaviorSubject(false)
  isMenuVisible = new BehaviorSubject(false)

  constructor () {
    fromEvent(window, 'resize')
      // .pipe(debounceTime(400)) // Enable to gain performance
      .subscribe((ev) => {
        this.recalculate((ev.target as Window).innerWidth)
      })
    this.recalculate(window.innerWidth)
  }

  private recalculate (width: number) {
    // タブレットサイズより大きい場合はメニューを出す
    this.isMenuVisible.next(width >= 768)
    this.isMobileView = width < 768
    this.showHeaderToggleButton.next(this.isMobileView)
  }

  toggleMenu (val?: boolean) {
    this.isMenuVisible.next(!this.isMenuVisible.value || val)
  }

  closeMenuIfNeeded () {
    if (!this.isMobileView) return
    this.toggleMenu(false)
  }
}
