import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Title: String = "Products";

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  products: Product[];

  constructor(private svc: ProductService) { }

  ngOnInit() {
    this.svc.list().subscribe(resp => {
      console.log(resp);
      this.products= resp.Data;
    })
  }

}
