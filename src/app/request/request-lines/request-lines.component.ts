import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService } from '../purchaserequest.service';
import { PurchaseRequest } from '../purchaserequest';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request: PurchaseRequest = new PurchaseRequest;


  constructor(
    private svc: PurchaserequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.prid;
    this.svc.get(id).subscribe(resp => {
      console.log( "PR:", resp);
      this.request = resp.Data;
    })

  }

}
