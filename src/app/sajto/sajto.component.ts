import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-sajto',
  templateUrl: './sajto.component.html',
  styleUrls: ['./sajto.component.css'],
})
export class SajtoComponent implements OnInit {
 param = {value: 'world'};
  constructor(translate: TranslateService) { 
            // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
  }

  ngOnInit() {
  }

}
