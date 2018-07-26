import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLineItem } from './request-lines';
import { JsonResponse} from '../Utility/JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class RequestLinesService {

  url = "http://localhost:50221/PurchaseRequestLineItems/";

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }

  create(requestline: RequestLineItem): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", requestline) as Observable<JsonResponse>;
  }

  change(requestline: RequestLineItem): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", requestline) as Observable<JsonResponse>;
  }

  remove(requestline: RequestLineItem): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", requestline) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient ) { }
}
