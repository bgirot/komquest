import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Wip } from './components/wip/wip';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, Wip],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'komquest.cc';
}
