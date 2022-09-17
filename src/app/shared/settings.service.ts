import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  allowSpoiler = new BehaviorSubject(false)

  constructor () { }

}
