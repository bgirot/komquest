import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  constructor(private languageService: LanguageService) {}

  setLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  getCurrentLanguage(): string {
    return this.languageService.getCurrentLanguage();
  }
}