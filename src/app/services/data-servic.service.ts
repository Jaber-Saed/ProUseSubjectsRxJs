import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataServicService {
  constructor() {}

  // dataEmitter = new EventEmitter<string>();

  dataEmitter = new Subject<string>()

  raisData(data: string) {
    this.dataEmitter.next(data);
  }
}
