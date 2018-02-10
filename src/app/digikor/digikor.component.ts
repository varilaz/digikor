
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-digikor',
  templateUrl: './digikor.component.html',
  styleUrls: ['./digikor.component.css']
})
export class DigikorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
/*  onLoadKutatok(event){
    this.router.navigate(['/kutatok']);  
  }
*/
scroll(el) {
    el.scrollIntoView();
}

scroll2(el) {
    console.log(el);
    el.scrollIntoView();
}

scroll3(el) {
    console.log(el);
    el.scrollIntoView();
}

scroll4(el) {
    console.log(el);
    el.scrollIntoView();
}

 public pie_ChartData = [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
];

    public pie_ChartOptions = {
        title: 'My Daily Activities',
        height: 280,
        is3D: true,
        backgroundColor: 'transparent'
    };
  

}
