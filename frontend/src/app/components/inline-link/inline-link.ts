import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inline-link',
  imports: [TranslateModule, RouterModule],
  templateUrl: './inline-link.html',
  styleUrl: './inline-link.scss'
})
export class InlineLink {
  @Input() text: string = 'Link';
  @Input() href: string = '#';
  @Input() target: '_self' | '_blank' = '_self';
  @Input() routerLink?: string[];
}
