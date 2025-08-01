import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default-btn',
  imports: [TranslateModule, RouterModule],
  templateUrl: './default-btn.html',
  styleUrl: './default-btn.scss'
})
export class DefaultBtn {
  @Input() text: string = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() icon?: string;
  @Input() href?: string;
  @Input() target: '_self' | '_blank' = '_self';
  @Input() routerLink?: string[];

}
