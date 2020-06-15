import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';

@Injectable({
  providedIn: 'root'
})
export class Demo2Service {

  constructor(private demoService: DemoService) { }
  getArray() {
    return this.demoService.getArray();
  }

  getValue(str: string) {
    return this.demoService.getString(str);
  }
}
