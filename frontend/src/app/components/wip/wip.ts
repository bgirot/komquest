import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DefaultBtn } from '../default-btn/default-btn';

@Component({
    selector: 'app-wip',
    imports: [TranslateModule, DefaultBtn],
    templateUrl: './wip.html',
    styleUrl: './wip.scss'
})
export class Wip {}