// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class BillService {
  BASE_URL = "http://localhost:8888/BILLING-SERVICE/";

  constructor(private http: HttpClient) { }

  getBill(billId: number) {
    return this.http.get(this.BASE_URL + "fullBill/" + billId);
  }
}
