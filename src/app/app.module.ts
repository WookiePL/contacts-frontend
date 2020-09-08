import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    RouterModule.forRoot([
        { path: 'contacts', component: ContactListComponent },
        { path: '', redirectTo: 'contacts', pathMatch: 'full' }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
