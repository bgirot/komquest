import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../constants/constants';

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
    contactEmail = APP_CONSTANTS.footerContactEmail;
    gitHubUrl = APP_CONSTANTS.gitHubUrl;
    linkedInUrl = APP_CONSTANTS.linkedInUrl;
    email = APP_CONSTANTS.email;

    languagesTitle = APP_CONSTANTS.footerLanguagesTitle;
    languagesFrench = APP_CONSTANTS.footerLanguagesFrench;
    languagesEnglish = APP_CONSTANTS.footerLanguagesEnglish;

    confidentialityTitle = APP_CONSTANTS.footerConfidentialityTitle;
    confidentialityPolicy = APP_CONSTANTS.footerConfidentialityPolicy;
    confidentialityLegals = APP_CONSTANTS.footerConfidentialityLegals;
}
