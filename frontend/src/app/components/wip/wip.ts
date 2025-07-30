import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../constants/constants';
import { DefaultBtn } from '../default-btn/default-btn';

@Component({
    selector: 'app-wip',
    imports: [DefaultBtn],
    templateUrl: './wip.html',
    styleUrl: './wip.scss'
})

export class Wip {
    gitHubUrl = APP_CONSTANTS.gitHubUrl;
}