import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-btn',
  imports: [],
  templateUrl: './default-btn.html',
  styleUrl: './default-btn.scss'
})
export class DefaultBtn {
  @Input() text: string = 'Button';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() icon?: string;
  @Input() href: string = '#';
}
