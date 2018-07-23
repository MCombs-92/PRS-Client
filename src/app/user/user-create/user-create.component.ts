import { Component, OnInit } from '@angular/core';
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
      });
  }

  constructor(private usersvc: UserService) { }

  ngOnInit() {
  }

}
