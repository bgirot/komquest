import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selected-language';
  private readonly DEFAULT_LANGUAGE = 'fr';
  private readonly AVAILABLE_LANGUAGES = ['fr', 'en'];

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem(this.STORAGE_KEY);
    const browserLanguage = navigator.language.split('-')[0];
    
    const languageToUse = savedLanguage || 
      (this.AVAILABLE_LANGUAGES.includes(browserLanguage) ? browserLanguage : this.DEFAULT_LANGUAGE);
    
    this.setLanguage(languageToUse);
  }

  setLanguage(language: string): void {
    if (this.AVAILABLE_LANGUAGES.includes(language)) {
      this.translate.use(language);
      localStorage.setItem(this.STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }

  switchLanguage(): void {
    if(this.getCurrentLanguage() === 'fr') {
      this.setLanguage('en');
    } else {
      this.setLanguage('fr');
    }
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.DEFAULT_LANGUAGE;
  }

  getOtherLanguage(): string {
    return this.getCurrentLanguage() === 'fr' ? 'en' : 'fr';
  }

  getAvailableLanguages(): string[] {
    return [...this.AVAILABLE_LANGUAGES];
  }
}