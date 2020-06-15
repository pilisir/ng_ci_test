import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getArray() {
    return ['en', 'es', 'fr'];
  }

  getString(str: string) {
    return str;
  }

  getMap(key: any) {
    return new Map([[1, 'a'], [2, 'b']]).get(key);
  }
}
