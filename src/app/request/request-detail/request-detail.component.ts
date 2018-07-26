import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService } from '../purchaserequest.service';
import { PurchaseRequest } from '../purchaserequest';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  request: PurchaseRequest = new PurchaseRequest;

  Removed: boolean = false;

  Remove(): void {
    this.Removed = true;
  }

  Verified(): void {
    this.Removed = false;
    this.svc.remove(this.request)
      .subscribe(resp => {
        console.log("Remove Purchase Request:", resp);
        this.router.navigateByUrl('/requests/list');
      });
  }


  constructor( 
    private svc: PurchaserequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id).subscribe(resp => {
      console.log(resp);
      this.request = resp.Data;
    })
  }

}
