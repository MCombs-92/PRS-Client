import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
import { JsonResponse} from '../Utility/JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url = "http://localhost:50221/Vendors/";

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"List") as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
  }

  create(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(this.url+"Create", vendor) as Observable<JsonResponse>;
  }

  change(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(this.url+"Change", vendor) as Observable<JsonResponse>;
  }

  remove(vendor: Vendor): Observable<JsonResponse> {
    return this.http.post(this.url+"Remove", vendor) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient ) { }
}
