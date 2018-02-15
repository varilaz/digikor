import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-kapcsolat',
  templateUrl: './kapcsolat.component.html',
  styleUrls: ['./kapcsolat.component.css']
})
export class KapcsolatComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 47.481786;
  lng: number = 19.085374;
  zoom: number = 16;

  constructor() { }

  ngOnInit() {
  }
/*
  myMap() {
  var myCenter = new google.maps.LatLng(51.508742,-0.120850);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 12};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}*/
}
