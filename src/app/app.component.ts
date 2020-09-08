import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Languages } from './language.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-frontend';
  languages = Object.keys(Languages);

  constructor(private translateService: TranslateService) {
  }

  selectLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
