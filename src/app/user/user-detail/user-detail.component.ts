import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  Removed: boolean = false;

  user: User = new User;

  Remove(): void {
    this.Removed = true;
  }

  Verified(): void {
    this.Removed = false;
    this.usersvc.remove(this.user)
      .subscribe(resp => {
        console.log("Remove user:", resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor(
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(resp => {
      console.log(resp)
      this.user = resp.Data;
    }) 
  }

}
