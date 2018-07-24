import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService} from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  product: Product = new Product;
  vendors: Vendor[];

  change(): void {
    this.svc.change(this.product).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/products/list");
    })
  }

  constructor(
    private svc: ProductService,
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id).subscribe(resp => {
      this.product = resp.Data;
    })
    this.vensvc.list().subscribe(resp=> {
      console.log(resp);
      this.vendors = resp.Data;
    })

  }

}
