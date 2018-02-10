import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "site_header_menucontainer") {
        x.className += " responsive";
    } else {
        x.className = "site_header_menucontainer";
    }
    var y = document.getElementById("nav-toggle");
     y.classList.toggle( "active" );

  }

}
