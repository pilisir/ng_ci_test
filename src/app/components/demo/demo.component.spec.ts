import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { DemoService } from 'src/app/service/demo.service';
import { Demo2Service } from 'src/app/service/demo2.service';
import { DemoComponent } from './demo.component';

export class MockUserService {
  getValue(str) {
    return 'ooook';
  }
}

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;
  let service: DemoService;
  let service2: Demo2Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent],
      providers: [
        //   { provide: Demo2Service, useClass: MockUserService}
        // { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    });
    // .compileComponents();

    // service = TestBed.inject(DemoService);
    // service2 = TestBed.inject(Demo2Service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    // expect(service).toBeTruthy();
    // expect(service2).toBeTruthy();
  });

  it('should light toggle-able', () => {
    expect(component.isOn).toBe(false, 'init');
    component.clicked();
    expect(component.isOn).toBe(true, 'first');
    component.clicked();
    expect(component.isOn).toBe(false, 'second');
  });

  it('should light view message toggle-able', () => {
    expect(component.message).toMatch(/off/i);
    component.clicked();
    expect(component.message).toMatch(/on/i);
  });

  it('should show a Click Button on view.', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('span').textContent).toMatch(/off/i, '1');
    component.clicked();
    fixture.detectChanges();
    expect(el.querySelector('span').textContent).toMatch(/on/i, '2');
  });

});
