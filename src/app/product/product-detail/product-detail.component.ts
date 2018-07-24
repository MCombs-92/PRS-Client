import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  product: Product = new Product;

  Removed: boolean = false;

  Remove(): void {
    this.Removed = true;
  }

  Verified(): void {
    this.Removed = false;
    this.svc.remove(this.product)
      .subscribe(resp => {
        console.log("Remove user:", resp);
        this.router.navigateByUrl('/products/list');
      });
  }


  constructor( 
    private svc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id).subscribe(resp => {
      console.log(resp);
      this.product = resp.Data;
    })
  }

}
