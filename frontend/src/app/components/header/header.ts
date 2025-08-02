import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {
  private lastScrollTop = 0;
  private scrollThreshold = 5;
  isHeaderVisible = true;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
   
    // for micro movements
    if (Math.abs(currentScrollTop - this.lastScrollTop) < this.scrollThreshold) {
      return;
    }

    // If we scroll down and we arent on top
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > 100) {
      this.isHeaderVisible = false;
    } 
    // If we scroll up
    else if (currentScrollTop < this.lastScrollTop) {
      this.isHeaderVisible = true;
    }

    this.lastScrollTop = currentScrollTop;
  }

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