import { Component } from '@angular/core';
import { APP_CONSTANTS } from '../../constants/constants';

@Component({
    selector: 'app-wip',
    imports: [],
    templateUrl: './wip.html',
    styleUrl: './wip.scss'
})

export class Wip {
    gitHubUrl = APP_CONSTANTS.gitHubUrl;
}