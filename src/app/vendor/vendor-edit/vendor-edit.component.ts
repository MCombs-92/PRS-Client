import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  vendor: Vendor = new Vendor;

  change(): void {
    this.vensvc.change(this.vendor).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/vendors/list");
    })
  }

  constructor(
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vensvc.get(id).subscribe(resp => {
      this.vendor = resp.Data;
    })
  }

}
