import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpDemoService {

  constructor(
    private http: HttpClient
  ) {}

  // getData2(): Observable<any> {
  //   return this.http.get('/test');
  // }

  getData(): Observable<any> {
    return this.http.get('https://ops.lale.im/operation/memia/statistics/order-trade-amount');
  }
}
