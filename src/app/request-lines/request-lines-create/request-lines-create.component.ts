import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService} from '../../user/user.service';
import { User } from '../../user/user';
import { RequestLinesService } from '../request-lines.service';
import { RequestLineItem } from '../request-lines';
import { Product } from '../../product/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-request-lines-create',
  templateUrl: './request-lines-create.component.html',
  styleUrls: ['./request-lines-create.component.css']
})
export class RequestLinesCreateComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  purchaserequestid: number;
  request: RequestLineItem = new RequestLineItem;
  products: Product[];

  create(): void {
    this.svc.create(this.request).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/requests/lines/" + this.request.PurchaseRequestId)
    })
  }

  constructor(
    private svc: RequestLinesService,
    private productsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.request.PurchaseRequestId = this.route.snapshot.params.prid;
    this.productsvc.list()
      .subscribe(resp => {
        this.products = resp.Data;
        console.log("Products:", resp);
      });
  }

}
