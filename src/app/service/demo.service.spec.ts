import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('包含特定語系', () => {
    const languages = service.getArray();
    expect(languages).toContain('en');
    expect(languages.length).toBe(3);
  });

  it('字串', () => {
    expect(service.getString('o')).toBe('o');
  });

  it('Map should work', () => {
    expect(service.getMap(1)).toBe('a');
  });


});
