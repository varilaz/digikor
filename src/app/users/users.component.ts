import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {name:'User A',id:1},
    {name:'User B',id:2},
    {name:'User C',id:3}
  ]

  constructor() { }

  ngOnInit() {
  }

}
