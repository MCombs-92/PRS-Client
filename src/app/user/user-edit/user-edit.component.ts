import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  user: User = new User;

  change(): void {
    this.usersvc.change(this.user).subscribe(resp => {
      console.log(resp);
      this.router.navigateByUrl("/users/list");
    })
  }

  constructor(
    private usersvc: UserService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id)
      .subscribe(resp => {
        this.user = resp.Data;
      });
  }

}
