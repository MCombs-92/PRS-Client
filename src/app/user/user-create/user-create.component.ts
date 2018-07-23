import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  user: User = new User;

  create(): void {
    this.usersvc.create(this.user)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl("/users/list")
      });
  }

  constructor(private usersvc: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
