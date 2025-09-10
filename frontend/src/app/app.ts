import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { LanguageService } from './services/language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [Footer, 
            Header, 
            RouterOutlet, 
            TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'komquest.cc';

  constructor(private languageService: LanguageService, private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    // L'initialisation de la langue se fait automatiquement dans le service
  }
}