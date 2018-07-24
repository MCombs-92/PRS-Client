import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseRequest } from './purchaserequest';
import { JsonResponse} from '../Utility/JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class PurchaserequestService {

  url = "http://localhost:50221/PurchaseRequests/";

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }

  create(request: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", request) as Observable<JsonResponse>;
  }

  change(request: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", request) as Observable<JsonResponse>;
  }

  remove(request: PurchaseRequest): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", request) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient ) { }
}
