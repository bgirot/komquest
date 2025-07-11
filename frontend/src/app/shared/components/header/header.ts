import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../../constants/constants';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  gitHubUrl = APP_CONSTANTS.gitHubUrl;
  siteTitle = APP_CONSTANTS.siteTitle;

}
