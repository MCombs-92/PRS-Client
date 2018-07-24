import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  boolOptions = [
    { display: 'Yes', value: true },
    { display: 'No', value: false }
  ];

  users: User[];

  Header = "Registered Users";

  constructor(private usersvc: UserService) { }

  ngOnInit() {

    this.usersvc.list().subscribe(resp => {
      this.users=resp.Data;
      console.log(this.users);
    })

  }

}
