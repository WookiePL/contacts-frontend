import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HomeComponent,
    LoginComponent,
    ConfirmationPopupComponent,
    SkillListComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'contacts', component: ContactListComponent },
      { path: 'contacts/:id', component: ContactDetailsComponent },
      { path: 'skills', component: SkillListComponent },
      // { path: '', redirectTo: 'contacts', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '' }
    ]),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
