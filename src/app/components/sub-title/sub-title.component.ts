import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  imports: [],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.scss'
})
export class SubTitleComponent {
  subTitleText = input<string>('');
}
