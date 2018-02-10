import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {GoogleChart} from './angular2-google-chart.directive';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Routes } from '@angular/router';
import { DigikorComponent } from './digikor/digikor.component';
import { ProjektekComponent } from './projektek/projektek.component';
import { KutatokComponent } from './kutatok/kutatok.component';
import { PublikaciokComponent } from './publikaciok/publikaciok.component';
import { KutatasComponent } from './kutatas/kutatas.component';
import { SajtoComponent } from './sajto/sajto.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { KozossegiMediaComponent } from './kozossegi-media/kozossegi-media.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
  { path: '', component: DigikorComponent },
  { path: 'projektek', component: ProjektekComponent },
  { path: 'kutatok', component: KutatokComponent },
  { path: 'publikaciok', component: PublikaciokComponent },
  { path: 'kutatas', component: KutatasComponent },
  { path: 'sajto', component: SajtoComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'kozossegiMedia', component: KozossegiMediaComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent }
]

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DigikorComponent,
    ProjektekComponent,
    KutatokComponent,
    PublikaciokComponent,
    KutatasComponent,
    SajtoComponent,
    KapcsolatComponent,
    KozossegiMediaComponent,
    UsersComponent,
    UserComponent,
    GoogleChart,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
