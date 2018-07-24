import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../purchaserequest.service';
import { PurchaseRequest } from '../purchaserequest';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  Title: String = "Requests";

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  purchaserequests: PurchaseRequest[];

  constructor(private svc: PurchaserequestService) { }

  ngOnInit() {
    this.svc.list().subscribe(resp => {
      console.log(resp);
      this.purchaserequests = resp.Data;
    })
  }

}
