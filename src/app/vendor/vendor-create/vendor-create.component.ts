import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  vendor: Vendor = new Vendor

  create():void {
    this.vensvc.create(this.vendor).subscribe(resp => {
      console.log(resp);
      this.vendor = resp.Data;
      this.router.navigateByUrl("/vendors/list")

    })
  }

  constructor(
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
