import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  vendor: Vendor = new Vendor;

  Removed: boolean = false;

  Remove(): void {
    this.Removed = true;
  }

  Verified(): void {
    this.Removed = false;
    this.vensvc.remove(this.vendor)
      .subscribe(resp => {
        console.log("Remove user:", resp);
        this.router.navigateByUrl('/vendors/list');
      });
  }


  constructor( 
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.vensvc.get(id).subscribe(resp => {
      console.log(resp);
      this.vendor = resp.Data;
    })
  }


}
