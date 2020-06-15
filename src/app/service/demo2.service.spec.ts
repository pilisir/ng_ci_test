import { TestBed } from '@angular/core/testing';

import { Demo2Service } from './demo2.service';
import { DemoService } from './demo.service';

/* export class DemoVService extends DemoService {
  getArray() {
    return ['tw', 'hk', 'cn'];
  }
} */

describe('Demo2Service', () => {
  let demo: DemoService;
  let demo2: Demo2Service;
  // let demoServiceSpy: jasmine.SpyObj<DemoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DemoService', ['getArray']);

    TestBed.configureTestingModule({ providers: [
      Demo2Service, { provider: DemoService, useValue: spy}
    ] });
    demo = TestBed.inject(DemoService);
    demo2 = TestBed.inject(Demo2Service);

    // demo2 = new Demo2Service(demo);
  });

  it('should be created', () => {
    expect(demo2).toBeTruthy();
  });

  it('get from DemoServices', () => {
    expect(demo2.getArray()).toContain('en');
  });

  // it('test fake server', () => {
  //   const fake = {
  //     getArray: () => {
  //       return ['vm1'];
  //     }
  //   };
  //   service = new Demo2Service(fake as DemoVService);
  //   expect(service.getArray()).toContain('vm1');
  // });

  // it('#getArray should return stubbed value from a spy', () => {

  //   expect(service.getArray()).toContain('ok1', 'big problem!!!!!');
  //   expect(demoVServiceSpy.getArray.calls.mostRecent().returnValue).toContain('ok1');
  // });


  /* it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy =
      jasmine.createSpyObj('DemoService', ['getString']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    service = new Demo2Service(valueServiceSpy);

    expect(service.getValue('s'))
      .toBe(stubValue, 'service returned stub value');
    expect(valueServiceSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  }); */
});
