import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService} from '../../user/user.service';
import { User } from '../../user/user';
import { PurchaserequestService } from '../purchaserequest.service';
import { PurchaseRequest } from '../purchaserequest';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  request: PurchaseRequest = new PurchaseRequest
  users: User[];

  create():void {
    this.svc.create(this.request).subscribe(resp => {
      console.log(resp);
      this.request = resp.Data;
      this.router.navigateByUrl("/requests/list")

    })
  }

  constructor(
    private svc: PurchaserequestService,
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usersvc.list().subscribe(resp => {
      console.log(resp);
      this.users = resp.Data;
    })
  }

}
