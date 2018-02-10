import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kutatok',
  templateUrl: './kutatok.component.html',
  styleUrls: ['./kutatok.component.css']
})
export class KutatokComponent implements OnInit {

  profiles = [
    {
      img:'assets/img/img_avatar.png',
      name:"John Doe",
      title: "Architect & Engineer"
    },
    {
      img:'assets/img/img_avatar2.png',
      name:"Jane Doe",
      title: "Lawyer"
    },
    {
      img:'assets/img/avatar-4.png',
      name:"Mary Doe",
      title: "Professor"
    },
    {
      img:'assets/img/avatar-2.png',
      name:"Bill Doe",
      title: "Student"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
