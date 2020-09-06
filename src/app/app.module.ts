import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'contacts', component: ContactListComponent},
      { path: '', redirectTo: 'contacts', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
