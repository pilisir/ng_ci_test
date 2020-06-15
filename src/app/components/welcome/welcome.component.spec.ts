import { async, ComponentFixture, TestBed, tick, fakeAsync, flush } from '@angular/core/testing';
import { UserService } from 'src/app/service/user.service';
import { WelcomeComponent } from './welcome.component';

let userService: UserService;
let userServiceStub: Partial<UserService>;
let component: WelcomeComponent;
let fixture: ComponentFixture<WelcomeComponent>;
let page: Page;

describe('WelcomeComponent', () => {
  // let el: HTMLElement;

  beforeEach(() => {
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User' }
    };

    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        { provide: UserService, useValue: userServiceStub }
      ]
    })
      .compileComponents();

    // 有沒有 provide 影響提取到的 service 內容為真或 test-double
    userService = TestBed.inject(UserService);

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); // 同時呼叫 ngOnInit，因此若要在初始化前還要改變參數，則不能在這邊太早呼叫
    // 不是根注入，則改用從元件提取 service
    // userService = fixture.debugElement.injector.get(UserService);
    // el = fixture.nativeElement;
    page = new Page(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get stub user', () => {
    expect(userService.user.name).toContain('Test User');
  });

  it('should set login false and show please login', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    // expect(el.querySelector('em').textContent).toContain('Please');
    expect(page.welcomeMessage.textContent).toContain('Please');
  });

  it('view should show Welcome Jason', () => {
    userService.user.name = 'Jason';
    fixture.detectChanges();
    expect(page.welcomeMessage.textContent).toContain('Jason');
  });

  it('should wait async result', fakeAsync(() => {
    setTimeout(() => {
      userService.isLoggedIn = false;
    }, 1000);

    flush();

    userService.user.name = 'Jason';
    fixture.detectChanges();
    expect(page.welcomeMessage.textContent).not.toContain('Jason');
  }));

  it('should click button once', () => {
    const spy = spyOn(component, 'showWelcomeMessage');
    page.showWelcomeBtn.click();
    expect(spy.calls.count()).toBe(1);
  });

  it('should click button', () => {
    const spy = spyOn(component, 'showWelcomeMessage');
    page.showWelcomeBtn.click();
    // expect(spy.calls.count()).toBe(1);
    expect(spy).toHaveBeenCalled();
  });

});

class Page {

  get showWelcomeBtn() {
    return this.query<HTMLButtonElement>('button');
  }

  get welcomeMessage() {
    return this.query<HTMLElement>('em');
  }

  constructor(fixture: ComponentFixture<WelcomeComponent>) {
  }

  //// query helpers ////
  private query<T>(selector: string): T {
    return fixture.nativeElement.querySelector(selector);
  }

  private queryAll<T>(selector: string): T[] {
    return fixture.nativeElement.querySelectorAll(selector);
  }
}
