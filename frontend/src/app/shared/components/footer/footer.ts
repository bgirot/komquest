import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../../constants/constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
    contactTitle = APP_CONSTANTS.footerContactTitle;
    contactGitHub = APP_CONSTANTS.footerContactGithub;
    contactLinkedIn = APP_CONSTANTS.footerContactLinkedIn;
    ContactEmail = APP_CONSTANTS.footerContactEmail;

    LanguagesTitle = APP_CONSTANTS.footerLanguagesTitle;
    LanguagesFrench = APP_CONSTANTS.footerLanguagesFrench;
    LanguagesEnglish = APP_CONSTANTS.footerLanguagesEnglish;

    confidentialityTitle = APP_CONSTANTS.footerConfidentialityTitle;
    confidentialityPolicy = APP_CONSTANTS.footerConfidentialityPolicy;
    confidentialityLegals = APP_CONSTANTS.footerConfidentialityLegals;
}
