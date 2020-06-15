import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpDemoService } from './http-demo.service';
import { Data } from '@angular/router';

describe('HttpDemoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpService: HttpDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpDemoService);

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be create', () => {
    expect(httpService).toBeTruthy();
  });

  it('should get mock data', () => {
    httpService.getData().subscribe(
      (res: Data) => {
        expect(res.status).toBe(200);
      },
      err => {
        expect(err.status).toBe(404);
      }
    );

    const expectedData: Data = { success: true, status: 200 };
    const errorResponse = new HttpErrorResponse({ error: 'test 404 error', status: 404, statusText: '' });
    const req = httpTestingController.expectOne('https://ops.lale.im/operation/memia/statistics/order-trade-amount');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData/* , errorResponse */);
  });
});

/* describe('HttpDemoService Spy way', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let httpService: HttpDemoService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // TestBed.configureTestingModule({
    //   providers: [
    //     HttpDemoService, { provide: HttpClient, useValue: httpClientSpy as any}
    //   ]
    // });
    // httpService = TestBed.inject(HttpDemoService);
    httpService = new HttpDemoService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(httpService).toBeTruthy();
  });

  it('should return expected data (HttpClient called once1)', () => {
    const expectedData = { success: true, status: 200 };
    httpClientSpy.get.and.returnValue(of(expectedData));
    httpService.getData().subscribe((res: any) => {
      expect(res).toEqual(expectedData, 'expected');
    }, fail);

    expect(httpClientSpy.get.calls.count()).toBe(1, 'on call');
  });

  const keyCode = 404;
  it(`should return an error when status to be ${keyCode}.`, () => {
    const errorResponse = new HttpErrorResponse({ error: 'test 404 error', status: 404, statusText: '' });
    httpClientSpy.get.and.returnValue(throwError(errorResponse));
    httpService.getData().subscribe({
      error: err => expect(err.error).toContain(keyCode)
    });
  });

}); */
