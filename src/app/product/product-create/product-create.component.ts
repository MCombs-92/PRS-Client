import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService} from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  product: Product = new Product
  vendors: Vendor[];

  create():void {
    this.svc.create(this.product).subscribe(resp => {
      console.log(resp);
      this.product = resp.Data;
      this.router.navigateByUrl("/products/list")

    })
  }

  constructor(
    private svc: ProductService,
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.vensvc.list().subscribe(resp => {
      console.log(resp);
      this.vendors = resp.Data;
    })
  }

}
