import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  almenu: boolean = false;
  searchAlmenu: boolean = false;
  languageHu: boolean = false;
  languageEn: boolean = false;
    constructor(public translate: TranslateService) {
    translate.addLangs(["EN", "HU"]);
        translate.setDefaultLang('HU');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/EN|HU/) ? browserLang : 'HU')
        console.log();
  }

  almenuOpen(){
    if(this.almenu){
      this.almenu = false;
    } else {
      this.almenu = true;
    }
  }

  searchAlmenuOpen(){
    if(this.searchAlmenu){
      this.searchAlmenu = false;
    } else {
      this.searchAlmenu = true;
    }
  }

  searchAction(){
    this.searchAlmenu = false;
  }
}

