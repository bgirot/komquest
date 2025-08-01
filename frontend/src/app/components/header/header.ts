import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private languageService: LanguageService) {}

  switchLanguage(): void {
    this.languageService.switchLanguage();
  }

  getOtherLanguage(): string {
    return this.languageService.getOtherLanguage();
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}