import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService} from '../../user/user.service';
import { User } from '../../user/user';
import { PurchaserequestService } from '../purchaserequest.service';
import { PurchaseRequest } from '../purchaserequest';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  request: PurchaseRequest = new PurchaseRequest;
  users: User[];

  change(): void {
    this.svc.change(this.request).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/requests/list");
    })
  }

  constructor(
    private svc: PurchaserequestService,
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id).subscribe(resp => {
      this.request = resp.Data;
    })
    this.usersvc.list().subscribe(resp=> {
      console.log(resp);
      this.users = resp.Data;
    })

  }

}
